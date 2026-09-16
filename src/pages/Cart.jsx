import { Link } from "react-router-dom";
import AnnouncementBar from "../components/global/AnnouncementBar";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { formatMoney } from "../integrations/shopifyClient";
import { useCart } from "../store/CartContext";

function variantLabel(merchandise) {
  const options = merchandise?.selectedOptions || [];
  if (!options.length) return merchandise?.title || "";
  return options.map((option) => `${option.name}: ${option.value}`).join(" · ");
}

export default function Cart() {
  const { lines, cart, loading, error, configured, updateItem, removeItem, checkoutUrl } = useCart();

  return (
    <div className="site-shell">
      <AnnouncementBar />
      <Navbar />
      <main>
        <div className="container ecommerce-page cart-page">
          <div className="cart-page__heading">
            <div>
              <p className="eyebrow">Respect My Kickz</p>
              <h1>Your Cart</h1>
            </div>
            <Link to="/shop" className="back-link">Continue shopping →</Link>
          </div>

          {!configured && (
            <div className="store-state">
              <h2>Checkout is almost ready.</h2>
              <p>The store is waiting on the final Shopify Storefront API connection.</p>
            </div>
          )}

          {error && <div className="store-state store-state--error"><p>{error}</p></div>}

          {configured && !lines.length && !loading && (
            <div className="store-state">
              <h2>Your cart is empty.</h2>
              <p>Browse the latest inventory and choose your pair.</p>
              <Link to="/shop" className="btn btn--black">Shop Sneakers</Link>
            </div>
          )}

          {lines.length > 0 && (
            <div className="cart-layout">
              <div className="cart-lines">
                {lines.map((line) => {
                  const merchandise = line.merchandise;
                  return (
                    <article key={line.id} className="cart-line">
                      <div className="cart-line__image">
                        {merchandise?.image?.url
                          ? <img src={merchandise.image.url} alt={merchandise.image.altText || merchandise.product?.title || "Sneaker"} />
                          : <div className="product-placeholder">No image</div>}
                      </div>
                      <div className="cart-line__info">
                        <p className="sneaker-card__brand">{merchandise?.product?.vendor}</p>
                        <h3>{merchandise?.product?.title}</h3>
                        <p>{variantLabel(merchandise)}</p>
                        <p className="cart-line__price">{formatMoney(merchandise?.price)}</p>
                        <div className="cart-line__actions">
                          <label>
                            Qty
                            <select
                              value={line.quantity}
                              disabled={loading}
                              onChange={(event) => updateItem(line.id, Number(event.target.value))}
                            >
                              {[1,2,3,4,5].map((qty) => <option key={qty} value={qty}>{qty}</option>)}
                            </select>
                          </label>
                          <button type="button" onClick={() => removeItem(line.id)} disabled={loading}>Remove</button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <aside className="cart-summary">
                <p className="eyebrow">Order Summary</p>
                <div className="cart-summary__row"><span>Subtotal</span><strong>{formatMoney(cart?.cost?.subtotalAmount)}</strong></div>
                <p className="cart-summary__note">Shipping and taxes are calculated securely at Shopify checkout.</p>
                {checkoutUrl && (
                  <a href={checkoutUrl} className="btn btn--black cart-summary__checkout">Secure Checkout</a>
                )}
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
