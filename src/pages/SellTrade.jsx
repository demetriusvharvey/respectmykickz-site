import AnnouncementBar from "../components/global/AnnouncementBar";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const STEPS = [
  { num: "01", title: "Send Photos", desc: "Text or DM clear photos of the pair, size, condition, and box/accessories." },
  { num: "02", title: "Get Reviewed", desc: "We review the pair, market demand, condition, and authenticity details remotely." },
  { num: "03", title: "Receive an Offer", desc: "If we're interested, we'll send a cash offer or trade option with next-step instructions." },
  { num: "04", title: "Complete the Deal", desc: "Once terms are agreed, we'll confirm shipping or handoff details directly with you." },
];

const ACCEPTED = [
  "Jordan 1–14 Retros", "Nike Dunks & SB Dunks", "Adidas Yeezy",
  "New Balance 550 / 990", "Off-White Collabs", "Travis Scott Collabs",
  "Fragment Collabs", "Air Force 1 Premiums", "Limited / Hype Releases",
];

export default function SellTrade() {
  return (
    <div className="site-shell">
      <AnnouncementBar />
      <Navbar />
      <main>
        <div style={{background:"var(--black)", color:"var(--white)", padding:"72px 0 64px"}}>
          <div className="container">
            <p className="eyebrow eyebrow--white" style={{marginBottom:"12px"}}>Sell &amp; Trade</p>
            <h1 style={{color:"var(--white)", maxWidth:"700px"}}>
              Turn Your <em style={{color:"var(--accent)",fontStyle:"normal"}}>Sneakers</em> Into Cash
            </h1>
            <p style={{color:"rgba(255,255,255,0.5)", fontSize:"16px", maxWidth:"540px", marginTop:"16px", lineHeight:1.7}}>
              Start online by sending photos and details. We'll review the pair and let you know if we can make an offer or trade.
            </p>
            <div style={{display:"flex", gap:"12px", marginTop:"32px", flexWrap:"wrap"}}>
              <a href="sms:5857739393" className="btn btn-accent btn-lg">Text Us: 585-773-9393</a>
              <a href="https://www.instagram.com/respectmykickz/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">DM on Instagram</a>
            </div>
          </div>
        </div>

        <div className="section" style={{background:"var(--bg)"}}>
          <div className="container">
            <div style={{textAlign:"center", marginBottom:"56px"}}>
              <p className="eyebrow eyebrow--accent" style={{marginBottom:"8px"}}>The Process</p>
              <h2>How It Works</h2>
            </div>
            <div className="qa-process-grid">
              {STEPS.map((s) => (
                <div key={s.num} style={{background:"var(--surface)", padding:"40px 28px"}}>
                  <div style={{
                    fontFamily:"var(--font-heading)", fontSize:"3rem", fontWeight:900,
                    color:"var(--accent)", lineHeight:1, marginBottom:"16px"
                  }}>{s.num}</div>
                  <h4 style={{marginBottom:"10px"}}>{s.title}</h4>
                  <p style={{fontSize:"14px", color:"var(--text-secondary)", lineHeight:1.6}}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section" style={{background:"var(--black)", color:"var(--white)"}}>
          <div className="container qa-two-col qa-two-col--wide">
            <div>
              <p className="eyebrow eyebrow--white" style={{marginBottom:"12px"}}>What We Accept</p>
              <h2 style={{color:"var(--white)", marginBottom:"20px"}}>We Buy the Heat</h2>
              <p style={{color:"rgba(255,255,255,0.5)", marginBottom:"32px", lineHeight:1.7}}>
                Authentic, in-demand pairs are the focus. Condition, size, completeness, and current market demand all affect the offer.
              </p>
              <div style={{display:"flex", flexWrap:"wrap", gap:"8px"}}>
                {ACCEPTED.map((item) => (
                  <span key={item} style={{
                    padding:"7px 14px", border:"1px solid rgba(255,255,255,0.15)",
                    borderRadius:"100px", fontSize:"12px", color:"rgba(255,255,255,0.7)",
                    fontWeight:600
                  }}>{item}</span>
                ))}
              </div>
            </div>
            <div style={{background:"#111", borderRadius:"var(--radius-lg)", padding:"40px"}}>
              <h3 style={{color:"var(--white)", marginBottom:"24px"}}>Consignment Option</h3>
              <p style={{color:"rgba(255,255,255,0.5)", marginBottom:"20px", lineHeight:1.7, fontSize:"14px"}}>
                For select pairs, consignment may be available. We'll review the item first and confirm pricing, fees, shipping, and payout terms before anything is listed.
              </p>
              <div style={{display:"flex", flexDirection:"column", gap:"12px", marginBottom:"32px"}}>
                {["Remote review first","Terms confirmed before listing","Online marketing and buyer communication","Payout terms confirmed in advance"].map((pt) => (
                  <div key={pt} style={{display:"flex", alignItems:"center", gap:"10px", fontSize:"14px", color:"rgba(255,255,255,0.65)"}}>
                    <span style={{color:"var(--accent)", fontWeight:800}}>✓</span> {pt}
                  </div>
                ))}
              </div>
              <a href="sms:5857739393" className="btn btn-accent" style={{width:"100%", justifyContent:"center"}}>
                Ask About Consignment
              </a>
            </div>
          </div>
        </div>

        <div className="section" style={{background:"var(--surface)", textAlign:"center"}}>
          <div className="container">
            <p className="eyebrow eyebrow--accent" style={{marginBottom:"12px"}}>Ready?</p>
            <h2 style={{marginBottom:"16px"}}>Send Us Your Pair</h2>
            <p style={{color:"var(--text-secondary)", marginBottom:"36px", maxWidth:"520px", margin:"0 auto 36px", lineHeight:1.7}}>
              Text or DM clear photos, the size, condition, and what you're looking to get. We'll reply with next steps if it's a fit.
            </p>
            <div style={{display:"flex", gap:"12px", justifyContent:"center", flexWrap:"wrap"}}>
              <a href="sms:5857739393" className="btn btn-primary btn-lg">Text 585-773-9393</a>
              <a href="https://www.instagram.com/respectmykickz/" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">DM on Instagram</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
