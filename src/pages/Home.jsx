import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnnouncementBar from "../components/global/AnnouncementBar";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { formatMoney, getProducts, shopifyConfigured } from "../integrations/shopifyClient";

const IG = "https://www.instagram.com/respectmykickz/";
const EDITORIAL = [
  "https://cdn.shopify.com/s/files/1/0761/3408/8876/files/respectmykickz-exclusive-hero.png?v=1789583393",
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=86",
];

export default function Home() {
  const [drops, setDrops] = useState([]);
  const [loading, setLoading] = useState(shopifyConfigured);

  useEffect(() => {
    if (!shopifyConfigured) {
      setLoading(false);
      return;
    }
    getProducts(12)
      .then((items) => setDrops((items || []).filter((product) => product.featuredImage?.url).slice(0, 4)))
      .catch(() => setDrops([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="site-shell drop-site">
      <AnnouncementBar />
      <Navbar />
      <main>
        <section className="drop-hero">
          <div className="drop-hero__copy">
            <span className="drop-kicker">Online only · limited inventory · authenticated pairs</span>
            <h1>THE PAIRS<br />DON'T STAY.</h1>
            <p>
              Respect My Kickz is built around selective drops, new releases, and exclusive inventory as it lands.
              No bloated catalog. If it's live, it's available.
            </p>
            <div className="drop-hero__actions">
              <Link to="/shop" className="btn btn--light btn--lg">Shop Current Drop →</Link>
              <a href={IG} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-white btn--lg">Follow Drops ↗</a>
            </div>
          </div>
          <div className="drop-hero__visual" aria-label="Editorial sneaker imagery">
            <img src={EDITORIAL[0]} alt="Exclusive sneaker editorial" />
            <div className="drop-hero__stamp">LIMITED<br />ONLINE<br />DROPS</div>
          </div>
        </section>

        <section className="drop-manifesto">
          <span>NEW RELEASES</span><span>EXCLUSIVE PAIRS</span><span>REAL INVENTORY</span><span>SECURE CHECKOUT</span>
        </section>

        <section className="drop-section">
          <div className="drop-section__head">
            <div>
              <span className="drop-kicker drop-kicker--dark">Available now</span>
              <h2>THE CURRENT DROP</h2>
            </div>
            <Link to="/shop" className="drop-text-link">View everything →</Link>
          </div>

          {loading ? (
            <div className="drop-empty">Loading the current drop…</div>
          ) : drops.length ? (
            <div className="drop-grid">
              {drops.map((product) => (
                <Link to={`/products/${product.handle}`} className="drop-product" key={product.id}>
                  <div className="drop-product__image">
                    <img src={product.featuredImage.url} alt={product.featuredImage.altText || product.title} />
                    {!product.availableForSale && <span className="drop-product__sold">SOLD OUT</span>}
                  </div>
                  <div className="drop-product__meta">
                    <div><span>{product.vendor || "Respect My Kickz"}</span><h3>{product.title}</h3></div>
                    <strong>{formatMoney(product.priceRange?.minVariantPrice)}</strong>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="drop-empty drop-empty--editorial">
              <div>
                <span className="drop-kicker drop-kicker--dark">Between drops</span>
                <h3>NO RELEASE IS LIVE.</h3>
                <p>Inventory appears here only when real pairs with complete product details are available. Follow Instagram for release alerts.</p>
              </div>
              <a href={IG} target="_blank" rel="noopener noreferrer" className="btn btn--black">Follow @respectmykickz ↗</a>
            </div>
          )}
        </section>

        <section className="drop-editorial">
          <div className="drop-editorial__image"><img src={EDITORIAL[1]} alt="Sneaker editorial" /></div>
          <div className="drop-editorial__copy">
            <span className="drop-kicker">How it works</span>
            <h2>SMALLER CATALOG.<br />BETTER PAIRS.</h2>
            <p>
              Inventory changes with each release. Shop the site when a drop is active, pick your available size,
              add to cart, and complete payment through secure Shopify checkout.
            </p>
            <div className="drop-points">
              <div><b>01</b><span>Pairs are listed only when they're actually available.</span></div>
              <div><b>02</b><span>Available sizes and sold-out status come directly from Shopify inventory.</span></div>
              <div><b>03</b><span>Checkout happens securely online — no store visit required.</span></div>
            </div>
          </div>
          <div className="drop-editorial__image drop-editorial__image--secondary"><img src={EDITORIAL[2]} alt="Sneaker editorial detail" /></div>
        </section>

        <section className="drop-social">
          <div>
            <span className="drop-kicker">Stay ahead of the next pair</span>
            <h2>DROP ALERTS LIVE ON IG.</h2>
          </div>
          <a href={IG} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-white btn--lg">@respectmykickz ↗</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
