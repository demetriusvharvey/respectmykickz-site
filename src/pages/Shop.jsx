import { useState } from "react";
import AnnouncementBar from "../components/global/AnnouncementBar";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import SneakerCard from "../components/sneakers/SneakerCard";
import { PRODUCTS, BRANDS } from "../data/products";

export default function Shop() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.brand === active);

  return (
    <div className="site-shell">
      <AnnouncementBar />
      <Navbar />
      <main>
        <div style={{background:"var(--black)", color:"var(--white)", padding:"56px 0 48px"}}>
          <div className="container">
            <p className="eyebrow eyebrow--white" style={{marginBottom:"12px"}}>Respect My Kickz</p>
            <h1 style={{color:"var(--white)"}}>Shop All Sneakers</h1>
            <p style={{color:"rgba(255,255,255,0.5)", fontSize:"15px", marginTop:"12px"}}>
              Authenticated. Updated daily. DM us on Instagram to grab your pair.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="filter-bar">
            <span style={{fontSize:"12px", fontWeight:600, color:"var(--text-muted)", marginRight:"8px", textTransform:"uppercase", letterSpacing:"0.1em"}}>Brand:</span>
            {BRANDS.map((b) => (
              <button
                key={b}
                className={`filter-chip${active === b ? " active" : ""}`}
                onClick={() => setActive(b)}
              >
                {b}
              </button>
            ))}
            <span style={{marginLeft:"auto", fontSize:"12px", color:"var(--text-muted)"}}>
              {filtered.length} pairs
            </span>
          </div>

          <div className="product-grid" style={{marginBottom:"80px"}}>
            {filtered.map((p) => <SneakerCard key={p.id} item={p} />)}
          </div>

          <div style={{
            background:"var(--black)", color:"var(--white)",
            borderRadius:"var(--radius-lg)", padding:"48px 40px",
            display:"flex", alignItems:"center", justifyContent:"space-between",
            flexWrap:"wrap", gap:"24px", marginBottom:"80px"
          }}>
            <div>
              <h3 style={{color:"var(--white)", marginBottom:"8px"}}>Don't See Your Size?</h3>
              <p style={{color:"rgba(255,255,255,0.5)", fontSize:"14px"}}>
                Text us and we'll source it. We preorder exclusive drops daily.
              </p>
            </div>
            <a href="sms:5857739393" className="btn btn-accent btn-lg">
              Text Us: 585-773-9393
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
