import AnnouncementBar from "../components/global/AnnouncementBar";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const STEPS = [
  { num: "01", title: "Send Photos", desc: "Send us photos on Instagram or text us. No appointment, no hassle." },
  { num: "02", title: "We Authenticate", desc: "Every pair gets inspected for authenticity and condition on the spot." },
  { num: "03", title: "Get Your Offer", desc: "Instant cash offer or trade credit — your choice. No pressure." },
  { num: "04", title: "Walk Out Paid", desc: "Cash on the spot, or trade up to something fresh off the shelves." },
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
        {/* Hero */}
        <div style={{background:"var(--black)", color:"var(--white)", padding:"72px 0 64px"}}>
          <div className="container">
            <p className="eyebrow eyebrow--white" style={{marginBottom:"12px"}}>Sell &amp; Trade</p>
            <h1 style={{color:"var(--white)", maxWidth:"700px"}}>
              Turn Your <em style={{color:"var(--accent)",fontStyle:"normal"}}>Sneakers</em> Into Cash
            </h1>
            <p style={{color:"rgba(255,255,255,0.5)", fontSize:"16px", maxWidth:"500px", marginTop:"16px", lineHeight:1.7}}>
              Instant cash offers or trade credit. We buy and trade all heat — no consignment waits, no fees, no BS.
            </p>
            <div style={{display:"flex", gap:"12px", marginTop:"32px", flexWrap:"wrap"}}>
              <a href="sms:5857739393" className="btn btn-accent btn-lg">Text Us First: 585-773-9393</a>
              <a href="https://www.instagram.com/respectmykickz/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">DM on Instagram</a>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="section" style={{background:"var(--bg)"}}>
          <div className="container">
            <div style={{textAlign:"center", marginBottom:"56px"}}>
              <p className="eyebrow eyebrow--accent" style={{marginBottom:"8px"}}>The Process</p>
              <h2>How It Works</h2>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"2px", background:"var(--border)"}}>
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

        {/* What We Buy */}
        <div className="section" style={{background:"var(--black)", color:"var(--white)"}}>
          <div className="container" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"center"}}>
            <div>
              <p className="eyebrow eyebrow--white" style={{marginBottom:"12px"}}>What We Accept</p>
              <h2 style={{color:"var(--white)", marginBottom:"20px"}}>We Buy the Heat</h2>
              <p style={{color:"rgba(255,255,255,0.5)", marginBottom:"32px", lineHeight:1.7}}>
                If it's authentic and in demand, we want it. Condition matters — deadstock gets top dollar.
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
                Don't want to sell outright? We can list your pair on our Instagram for consignment. You set the price, we handle the sale.
              </p>
              <div style={{display:"flex", flexDirection:"column", gap:"12px", marginBottom:"32px"}}>
                {["No upfront fees","You set your asking price","We handle everything online","Paid when it sells"].map((pt) => (
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

        {/* CTA */}
        <div className="section" style={{background:"var(--surface)", textAlign:"center"}}>
          <div className="container">
            <p className="eyebrow eyebrow--accent" style={{marginBottom:"12px"}}>Ready?</p>
            <h2 style={{marginBottom:"16px"}}>Bring Your Pairs In Today</h2>
            <p style={{color:"var(--text-secondary)", marginBottom:"36px", maxWidth:"480px", margin:"0 auto 36px", lineHeight:1.7}}>
              DM us on Instagram or send a text. We move fast — same day offers on most pairs.
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
