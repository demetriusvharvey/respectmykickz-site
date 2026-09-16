import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  addCartLines,
  createCart,
  getCart,
  removeCartLine,
  shopifyConfigured,
  updateCartLine,
} from "../integrations/shopifyClient";

const STORAGE_KEY = "respectmykickz_shopify_cart_id";
const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!shopifyConfigured) return;
    const cartId = localStorage.getItem(STORAGE_KEY);
    if (!cartId) return;

    let active = true;
    setLoading(true);
    getCart(cartId)
      .then((existingCart) => {
        if (!active) return;
        if (existingCart) setCart(existingCart);
        else localStorage.removeItem(STORAGE_KEY);
      })
      .catch(() => localStorage.removeItem(STORAGE_KEY))
      .finally(() => active && setLoading(false));

    return () => { active = false; };
  }, []);

  const saveCart = useCallback((nextCart) => {
    setCart(nextCart);
    if (nextCart?.id) localStorage.setItem(STORAGE_KEY, nextCart.id);
  }, []);

  const addItem = useCallback(async (variantId, quantity = 1) => {
    if (!shopifyConfigured) throw new Error("Online checkout is still being connected. Please check back shortly.");
    setLoading(true);
    setError("");
    try {
      const nextCart = cart?.id
        ? await addCartLines(cart.id, variantId, quantity)
        : await createCart(variantId, quantity);
      saveCart(nextCart);
      return nextCart;
    } catch (err) {
      const message = err?.message || "Unable to add this item to your cart.";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [cart?.id, saveCart]);

  const updateItem = useCallback(async (lineId, quantity) => {
    if (!cart?.id) return;
    setLoading(true);
    setError("");
    try {
      const nextCart = quantity <= 0
        ? await removeCartLine(cart.id, lineId)
        : await updateCartLine(cart.id, lineId, quantity);
      saveCart(nextCart);
    } catch (err) {
      setError(err?.message || "Unable to update your cart.");
    } finally {
      setLoading(false);
    }
  }, [cart?.id, saveCart]);

  const removeItem = useCallback(async (lineId) => {
    if (!cart?.id) return;
    setLoading(true);
    setError("");
    try {
      saveCart(await removeCartLine(cart.id, lineId));
    } catch (err) {
      setError(err?.message || "Unable to remove this item.");
    } finally {
      setLoading(false);
    }
  }, [cart?.id, saveCart]);

  const value = useMemo(() => ({
    cart,
    lines: cart?.lines?.nodes || [],
    count: cart?.totalQuantity || 0,
    loading,
    error,
    configured: shopifyConfigured,
    addItem,
    updateItem,
    removeItem,
    checkoutUrl: cart?.checkoutUrl || "",
  }), [cart, loading, error, addItem, updateItem, removeItem]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider.");
  return context;
}
