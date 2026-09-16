import { useEffect, useMemo, useState } from "react";
import AnnouncementBar from "../components/global/AnnouncementBar";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import SneakerCard from "../components/sneakers/SneakerCard";
import { getProducts, shopifyConfigured } from "../integrations/shopifyClient";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(shopifyConfigured);

  useEffect(() => {
    if (!shopifyConfigured) {
      setLoading(false);
      return;
    }

    let mounted = true;
    setLoading(true);
    getProducts(50)
      .then((items) => mounted && setProducts(items || []))
      .catch(() => mounted && setProducts([]))
      .finally(() => mounted && setLoading(false));

    return () => { mounted = false; };
  }, []);

  const brands = useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.vendor).filter(Boolean))).sort()], [products]);
  const filtered = active === "All" ? products : products.filter((p) => p.vendor === active);
  const betweenDrops = !loading && products.length === 0;

  return (
    <div className="site-shell">
      <AnnouncementBar />
      <Navbar />
      <main>
        <section style={{background:"var(--black)", color:"var(--white)", padding:"64px 0 56px"}}>
          <div className="container">
            <p className="eyebrow eyebrow--white" style={{marginBottom:"12px"}}>Respect My Kickz</p>
            <h1 style={{color:"var(--white)"}}>Current Drop</h1>
            <p style={{color:"rgba(255,255,255,0.58)", fontSize:"15px", marginTop:"12px", maxWidth:"620px"}}>
              Limited pairs. Live sizes. Secure Shopify checkout. When a release sells through, it leaves the site.
            </p>
          </div>
        </section>

        <div className="container">
          {loading && (
            <div className="store-state store-state--spaced">
              <p>Loading current release…</p>
            </div>
          )}

          {betweenDrops && (
            <section className="store-state store-state--spaced" style={{textAlign:"center", padding:"72px 28px"}}>
              <p className="eyebrow" style={{marginBottom:"12px"}}>Between Drops</p>
              <h2 style={{marginBottom:"12px"}}>No release is live right now.</h2>
              <p style={{maxWidth:"560px", margin:"0 auto 24px", color:"var(--text-muted)"}}>
                Respect My Kickz releases limited inventory as new pairs come in. Follow the release feed so you know when the next drop goes live.
              </p>
              <a
                href="https://www.instagram.com/official_respectmykickz_/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--black"
              >
                Follow Release Alerts ↗
              </a>
            </section>
          )}

          {products.length > 0 && (
            <>
              <div className="filter-bar">
                <span style={{fontSize:"12px", fontWeight:600, color:"var(--text-muted)", marginRight:"8px", textTransform:"uppercase", letterSpacing:"0.1em"}}>Brand:</span>
                {brands.map((brand) => (
                  <button
                    key={brand}
                    className={`filter-chip${active === brand ? " active" : ""}`}
                    onClick={() => setActive(brand)}
                  >
                    {brand}
                  </button>
                ))}
                <span style={{marginLeft:"auto", fontSize:"12px", color:"var(--text-muted)"}}>{filtered.length} pairs</span>
              </div>

              <div className="product-grid" style={{marginBottom:"80px"}}>
                {filtered.map((product) => <SneakerCard key={product.id} item={product} />)}
              </div>
            </>
          )}

          <section style={{
            background:"var(--black)", color:"var(--white)",
            borderRadius:"var(--radius-lg)", padding:"48px 40px",
            display:"flex", alignItems:"center", justifyContent:"space-between",
            flexWrap:"wrap", gap:"24px", marginBottom:"80px"
          }}>
            <div>
              <h3 style={{color:"var(--white)", marginBottom:"8px"}}>Looking for a specific pair?</h3>
              <p style={{color:"rgba(255,255,255,0.5)", fontSize:"14px"}}>Text us your size and what you're looking for. We source exclusive pairs and upcoming releases.</p>
            </div>
            <a href="sms:5857739393" className="btn btn-accent btn-lg">Text Us: 585-773-9393</a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
