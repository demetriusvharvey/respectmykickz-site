import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AnnouncementBar from "../components/global/AnnouncementBar";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import SizeSelector from "../components/sneakers/SizeSelector";
import { formatMoney, getProduct, shopifyConfigured } from "../integrations/shopifyClient";
import { useCart } from "../store/CartContext";

export default function Sneaker() {
  const { handle } = useParams();
  const { addItem, loading: cartLoading } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(shopifyConfigured);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!shopifyConfigured || !handle) {
      setLoading(false);
      return;
    }

    let active = true;
    setLoading(true);
    getProduct(handle)
      .then((nextProduct) => {
        if (!active) return;
        setProduct(nextProduct);
        const firstAvailable = nextProduct?.variants?.nodes?.find((v) => v.availableForSale);
        if (firstAvailable) setSelectedId(firstAvailable.id);
      })
      .catch((err) => active && setError(err?.message || "Unable to load this sneaker."))
      .finally(() => active && setLoading(false));

    return () => { active = false; };
  }, [handle]);

  const variants = product?.variants?.nodes || [];
  const selectedVariant = useMemo(
    () => variants.find((variant) => variant.id === selectedId) || null,
    [variants, selectedId]
  );
  const image = selectedVariant?.image || product?.featuredImage || product?.images?.nodes?.[0];

  async function addToCart() {
    if (!selectedVariant?.id) return;
    setAdded(false);
    setError("");
    try {
      await addItem(selectedVariant.id, 1);
      setAdded(true);
    } catch (err) {
      setError(err?.message || "Unable to add this sneaker to your cart.");
    }
  }

  return (
    <div className="site-shell">
      <AnnouncementBar />
      <Navbar />
      <main>
        <div className="container ecommerce-page">
          <Link to="/shop" className="back-link">← Back to shop</Link>

          {!shopifyConfigured && (
            <div className="store-state">
              <h1>Online checkout is being connected.</h1>
              <p>The storefront build is ready for Shopify inventory once the final Storefront API connection is added.</p>
            </div>
          )}

          {loading && <div className="store-state"><p>Loading sneaker…</p></div>}
          {error && <div className="store-state store-state--error"><p>{error}</p></div>}
          {!loading && shopifyConfigured && !error && !product && (
            <div className="store-state"><h1>Pair not found.</h1><p>This item may no longer be available.</p></div>
          )}

          {product && (
            <section className="product-detail">
              <div className="product-detail__media">
                {image?.url ? <img src={image.url} alt={image.altText || product.title} /> : <div className="product-placeholder">No image</div>}
              </div>
              <div className="product-detail__content">
                <p className="eyebrow">{product.vendor || "Respect My Kickz"}</p>
                <h1>{product.title}</h1>
                <div className="product-detail__price">
                  {formatMoney(selectedVariant?.price || product?.priceRange?.minVariantPrice)}
                </div>
                {product.description && <p className="product-detail__description">{product.description}</p>}

                <SizeSelector variants={variants} selectedId={selectedId} onSelect={setSelectedId} />

                <button
                  type="button"
                  className="btn btn--black product-detail__add"
                  disabled={!selectedVariant?.availableForSale || cartLoading}
                  onClick={addToCart}
                >
                  {cartLoading ? "Adding…" : selectedVariant?.availableForSale ? "Add to Cart" : "Sold Out"}
                </button>
                {added && <p className="cart-success">Added to cart. <Link to="/cart">View cart →</Link></p>}
                <p className="product-detail__note">Secure checkout and order processing are handled by Shopify.</p>
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
