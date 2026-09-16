import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Sneaker from "./pages/Sneaker";
import Cart from "./pages/Cart";
import SellTrade from "./pages/SellTrade";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const DEFAULT_DESCRIPTION = "Respect My Kickz is an online-only sneaker store for limited drops, exclusive pairs, live inventory, and secure Shopify checkout.";

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property=\"${name}\"]` : `meta[name=\"${name}\"]`;
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    if (property) tag.setAttribute("property", name);
    else tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = "Respect My Kickz — Limited Sneaker Drops";
    let description = DEFAULT_DESCRIPTION;

    if (pathname === "/shop" || pathname === "/new-arrivals" || pathname === "/brands") {
      title = "Current Drop | Respect My Kickz";
      description = "Shop live Respect My Kickz sneaker drops with current sizes, real availability, and secure Shopify checkout.";
    } else if (pathname.startsWith("/products/")) {
      title = "Sneaker | Respect My Kickz";
      description = "View live sneaker details, available sizes, pricing, and secure checkout from Respect My Kickz.";
    } else if (pathname === "/cart" || pathname === "/checkout") {
      title = "Cart | Respect My Kickz";
      description = "Review your Respect My Kickz cart and continue to secure Shopify checkout.";
    } else if (pathname === "/sell-trade") {
      title = "Sell & Trade Sneakers | Respect My Kickz";
      description = "Send Respect My Kickz your sneaker photos and details online for sell, trade, or select consignment inquiries.";
    } else if (pathname === "/contact") {
      title = "Contact | Respect My Kickz";
      description = "Contact Respect My Kickz online by text or Instagram for product, order, sourcing, sell, and trade questions.";
    } else if (pathname !== "/") {
      title = "Page Not Found | Respect My Kickz";
      description = DEFAULT_DESCRIPTION;
    }

    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <RouteMeta />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/new-arrivals" element={<Shop />} />
        <Route path="/brands" element={<Shop />} />
        <Route path="/products/:handle" element={<Sneaker />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Navigate to="/cart" replace />} />
        <Route path="/sell-trade" element={<SellTrade />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
