import { Link } from "react-router-dom";
import AnnouncementBar from "../components/global/AnnouncementBar";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const IG = "https://www.instagram.com/official_respectmykickz_/";

export default function Home() {
  return (
    <div className="site-shell">
      <AnnouncementBar />
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero__top">

            {/* left: text */}
            <div className="hero__text-side">
              <div className="hero__eyebrow">
                <span className="hero__eyebrow-line" />
                <span className="label label--light">Authentic Kicks · Online Only</span>
              </div>

              <div className="hero__big">
                <div className="display display--xl display--outline-white fade-up" style={{marginBottom:"4px"}}>
                  BUY
                </div>
                <div className="display display--xl fade-up d1" style={{color:"var(--white)"}}>
                  SELL
                </div>
                <div className="display display--xl display--outline-white fade-up d2">
                  TRADE
                </div>
              </div>

              <div className="hero__sub-row fade-up d3">
                <p className="hero__sub">
                  Exclusive sneakers. Jordans, Nikes, Yeezys, Dunks. DM us on Instagram to shop, sell, or trade.
                </p>
                <a href={IG} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-white btn--lg">
                  Shop on IG ↗
                </a>
              </div>
            </div>

            {/* right: photo mosaic */}
            <div className="hero__img-side">
              {[
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=80",
              ].map((src, i) => (
                <div key={i} className="hero__img-cell">
                  <img src={src} alt="sneaker" />
                </div>
              ))}
            </div>
          </div>

          {/* bottom stats bar */}
          <div className="hero__bottom">
            {[
              { num:"100%",       label:"Authenticated" },
              { num:"Jordan · Nike · Yeezy", label:"Brands We Carry" },
              { num:"DM to Buy",  label:"How It Works" },
              { num:"Daily",      label:"New Inventory" },
            ].map((s) => (
              <div key={s.label} className="hero__stat">
                <div className="hero__stat-num">{s.num}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TICKER ── */}
        <div className="ticker">
          <div className="ticker__track">
            {["Jordan","Nike","Adidas","Yeezy","New Balance","Kobe","Dunk","Air Force","Retro","Air Max","Travis Scott","Off-White"].flatMap((t,i) => [
              <span key={`a${i}`}>{t}</span>,
              <span key={`b${i}`} className="sep">·</span>
            ])}
            {["Jordan","Nike","Adidas","Yeezy","New Balance","Kobe","Dunk","Air Force","Retro","Air Max","Travis Scott","Off-White"].flatMap((t,i) => [
              <span key={`c${i}`}>{t}</span>,
              <span key={`d${i}`} className="sep">·</span>
            ])}
          </div>
        </div>

        {/* ── SHOP ON INSTAGRAM ── */}
        <section className="ig-section">
          <div className="ig-section__top">
            <div>
              <span className="label label--light" style={{display:"block", marginBottom:"14px"}}>Where the shop lives</span>
              <div className="display display--lg" style={{color:"var(--white)"}}>@official_</div>
              <div className="display display--lg display--outline-white">respectmykickz_</div>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"10px", alignItems:"flex-end"}}>
              <a href={IG} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-white btn--lg">
                Follow &amp; Shop ↗
              </a>
              <span className="label label--light">DM to buy · DM to sell · DM to trade</span>
            </div>
          </div>
          <div className="ig-section__grid">
            {[
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80",
            ].map((src, i) => (
              <a key={i} href={IG} target="_blank" rel="noopener noreferrer" className="ig-tile">
                <img src={src} alt="@official_respectmykickz_" />
              </a>
            ))}
          </div>
        </section>

        {/* ── BUY / SELL / TRADE ── */}
        <div className="rule" />
        <div className="bst-strip">
          {[
            {
              num:"01", title:"Buy",
              body:"See something you want? DM us on Instagram with the pair, your size, and we'll make it happen. No website checkout needed.",
              cta:"DM to Buy", href: IG, ext: true,
            },
            {
              num:"02", title:"Sell",
              body:"Got heat collecting dust? DM us photos of your pair and we'll come back with a fair offer. Cash in hand, no hassle.",
              cta:"DM to Sell", href: IG, ext: true,
            },
            {
              num:"03", title:"Trade",
              body:"Upgrade without paying full price. Bring your pair to the table and we'll work out a trade that gets you what you actually want.",
              cta:"Start a Trade", href:"/sell-trade", ext: false,
            },
          ].map((c) => (
            <div key={c.num} className="bst-card">
              <div className="bst-card__num">{c.num}</div>
              <div className="bst-card__title">{c.title}</div>
              <p className="bst-card__body">{c.body}</p>
              {c.ext
                ? <a href={c.href} target="_blank" rel="noopener noreferrer" className="bst-card__cta">{c.cta} →</a>
                : <Link to={c.href} className="bst-card__cta">{c.cta} →</Link>
              }
            </div>
          ))}
        </div>

        {/* ── HOW TO ORDER ── */}
        <section className="how-section">
          <div className="wrap">
            <div style={{borderBottom:"2px solid var(--black)", paddingBottom:"16px", display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:"16px"}}>
              <div>
                <span className="label" style={{display:"block", marginBottom:"10px"}}>Ordering is simple</span>
                <div className="display display--md">How It Works</div>
              </div>
              <a href={IG} target="_blank" rel="noopener noreferrer" className="btn btn--black">Open Instagram ↗</a>
            </div>
            <div className="how-steps">
              {[
                { n:"1", title:"Find Your Pair", body:"Browse our Instagram page or DM us what you're looking for. Jordan, Nike, Yeezy — we'll find it." },
                { n:"2", title:"DM Us",          body:"Shoot us a DM on Instagram @official_respectmykickz_. Tell us the shoe, size, and your budget." },
                { n:"3", title:"Done",            body:"We confirm availability, arrange payment, and get it to you. Fast, direct, no checkout flow." },
              ].map((s) => (
                <div key={s.n} className="how-step">
                  <div className="how-step__n">{s.n}</div>
                  <div className="how-step__title">{s.title}</div>
                  <p className="how-step__body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
