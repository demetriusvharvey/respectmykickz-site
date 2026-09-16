import { useState } from "react";
import AnnouncementBar from "../components/global/AnnouncementBar";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const PHONE = "5857739393";

export default function Contact() {
  const [form, setForm] = useState({ name:"", phone:"", subject:"general", message:"" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subjects = {
      general: "General Question",
      buy: "Looking to Buy",
      sell: "Looking to Sell",
      trade: "Trade Inquiry",
      preorder: "Preorder a Pair",
      consignment: "Consignment",
    };
    const body = [
      `Respect My Kickz — ${subjects[form.subject] || "Website Inquiry"}`,
      `Name: ${form.name}`,
      form.phone ? `Reply to: ${form.phone}` : "",
      "",
      form.message,
    ].filter(Boolean).join("\n");

    window.location.href = `sms:${PHONE}?body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="site-shell">
      <AnnouncementBar />
      <Navbar />
      <main>
        <div style={{background:"var(--black)", color:"var(--white)", padding:"64px 0 56px"}}>
          <div className="container">
            <p className="eyebrow eyebrow--white" style={{marginBottom:"12px"}}>Get In Touch</p>
            <h1 style={{color:"var(--white)"}}>Contact Us</h1>
            <p style={{color:"rgba(255,255,255,0.5)", marginTop:"12px", fontSize:"15px"}}>
              Online only. Text or Instagram DM is the fastest way to reach us.
            </p>
          </div>
        </div>

        <div className="section" style={{background:"var(--bg)"}}>
          <div className="container qa-two-col">
            <div>
              <h3 style={{marginBottom:"32px"}}>Reach Us Online</h3>

              <div style={{display:"flex", flexDirection:"column", gap:"28px"}}>
                <div style={{padding:"24px", background:"var(--surface)", borderRadius:"var(--radius-md)", border:"1px solid var(--border)"}}>
                  <div style={{fontSize:"24px", marginBottom:"10px"}}>🌐</div>
                  <h4 style={{marginBottom:"6px"}}>Online Only</h4>
                  <p style={{color:"var(--text-secondary)", fontSize:"14px", lineHeight:1.6}}>
                    Respect My Kickz operates online. Shop live drops on the site, or contact us by text or Instagram DM.
                  </p>
                </div>

                <div style={{padding:"24px", background:"var(--surface)", borderRadius:"var(--radius-md)", border:"1px solid var(--border)"}}>
                  <div style={{fontSize:"24px", marginBottom:"10px"}}>💬</div>
                  <h4 style={{marginBottom:"6px"}}>Quickest Response</h4>
                  <p style={{color:"var(--text-secondary)", fontSize:"14px", lineHeight:1.6, marginBottom:"16px"}}>
                    Text us or DM on Instagram for product questions, sourcing, sell/trade inquiries, or order support.
                  </p>
                  <div style={{display:"flex", flexDirection:"column", gap:"8px"}}>
                    <a href="sms:5857739393" className="btn btn-primary" style={{justifyContent:"center"}}>
                      📱 Text: 585-773-9393
                    </a>
                    <a href="https://www.instagram.com/respectmykickz/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{justifyContent:"center"}}>
                      Instagram DM ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{marginBottom:"32px"}}>Start a Message</h3>
              <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", gap:"16px"}}>
                <div>
                  <label style={{display:"block", fontSize:"12px", fontWeight:700, marginBottom:"6px", letterSpacing:"0.08em", textTransform:"uppercase"}}>Name</label>
                  <input
                    name="name" value={form.name} onChange={handleChange} required
                    placeholder="Your name"
                    autoComplete="name"
                    style={{width:"100%", padding:"12px 14px", border:"1.5px solid var(--border)", borderRadius:"var(--radius-sm)", fontSize:"14px", background:"var(--surface)"}}
                  />
                </div>
                <div>
                  <label style={{display:"block", fontSize:"12px", fontWeight:700, marginBottom:"6px", letterSpacing:"0.08em", textTransform:"uppercase"}}>Phone / Instagram</label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange}
                    placeholder="Best way to reach you back"
                    autoComplete="tel"
                    style={{width:"100%", padding:"12px 14px", border:"1.5px solid var(--border)", borderRadius:"var(--radius-sm)", fontSize:"14px", background:"var(--surface)"}}
                  />
                </div>
                <div>
                  <label style={{display:"block", fontSize:"12px", fontWeight:700, marginBottom:"6px", letterSpacing:"0.08em", textTransform:"uppercase"}}>Subject</label>
                  <select
                    name="subject" value={form.subject} onChange={handleChange}
                    style={{width:"100%", padding:"12px 14px", border:"1.5px solid var(--border)", borderRadius:"var(--radius-sm)", fontSize:"14px", background:"var(--surface)"}}
                  >
                    <option value="general">General Question</option>
                    <option value="buy">Looking to Buy</option>
                    <option value="sell">Looking to Sell</option>
                    <option value="trade">Trade Inquiry</option>
                    <option value="preorder">Preorder a Pair</option>
                    <option value="consignment">Consignment</option>
                  </select>
                </div>
                <div>
                  <label style={{display:"block", fontSize:"12px", fontWeight:700, marginBottom:"6px", letterSpacing:"0.08em", textTransform:"uppercase"}}>Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell us what you're looking for..."
                    style={{width:"100%", padding:"12px 14px", border:"1.5px solid var(--border)", borderRadius:"var(--radius-sm)", fontSize:"14px", background:"var(--surface)", resize:"vertical"}}
                  />
                </div>
                <button type="submit" className="btn btn-accent btn-lg" style={{justifyContent:"center"}}>
                  Open Text Message →
                </button>
                <p style={{color:"var(--text-muted)", fontSize:"12px", textAlign:"center", lineHeight:1.5}}>
                  This prepares your message in your device's texting app. Nothing is submitted or stored on this website.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
