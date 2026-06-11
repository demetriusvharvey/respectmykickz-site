import { useState } from "react";
import AnnouncementBar from "../components/global/AnnouncementBar";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name:"", phone:"", subject:"general", message:"" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
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
              Text is fastest. We respond to every message.
            </p>
          </div>
        </div>

        <div className="section" style={{background:"var(--bg)"}}>
          <div className="container" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"start"}}>

            {/* Left: contact info */}
            <div>
              <h3 style={{marginBottom:"32px"}}>Find Us</h3>

              <div style={{display:"flex", flexDirection:"column", gap:"28px"}}>
                <div style={{padding:"24px", background:"var(--surface)", borderRadius:"var(--radius-md)", border:"1px solid var(--border)"}}>
                  <div style={{fontSize:"24px", marginBottom:"10px"}}>📍</div>
                  <h4 style={{marginBottom:"6px"}}>Location</h4>
                  <p style={{color:"var(--text-secondary)", fontSize:"14px", lineHeight:1.6}}>
                    Online Only — DM on Instagram<br />or Text: 585-773-9393
                  </p>
                </div>

                <div style={{padding:"24px", background:"var(--surface)", borderRadius:"var(--radius-md)", border:"1px solid var(--border)"}}>
                  <div style={{fontSize:"24px", marginBottom:"10px"}}>🕐</div>
                  <h4 style={{marginBottom:"6px"}}>Hours</h4>
                  <p style={{color:"var(--text-secondary)", fontSize:"14px", lineHeight:1.8}}>
                    Monday – Sunday<br />
                    <strong style={{color:"var(--text-primary)"}}>12:00 PM – 8:00 PM</strong>
                  </p>
                </div>

                <div style={{padding:"24px", background:"var(--surface)", borderRadius:"var(--radius-md)", border:"1px solid var(--border)"}}>
                  <div style={{fontSize:"24px", marginBottom:"10px"}}>💬</div>
                  <h4 style={{marginBottom:"6px"}}>Quickest Response</h4>
                  <p style={{color:"var(--text-secondary)", fontSize:"14px", lineHeight:1.6, marginBottom:"16px"}}>
                    Text us or DM on Instagram — we reply fast.
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

            {/* Right: form */}
            <div>
              <h3 style={{marginBottom:"32px"}}>Send a Message</h3>

              {status === "success" ? (
                <div style={{
                  background:"#DCFCE7", border:"1px solid #86EFAC", borderRadius:"var(--radius-md)",
                  padding:"32px", textAlign:"center"
                }}>
                  <div style={{fontSize:"32px", marginBottom:"12px"}}>✅</div>
                  <h4 style={{color:"#15803D", marginBottom:"8px"}}>Message Sent!</h4>
                  <p style={{color:"#166534", fontSize:"14px"}}>We'll hit you back ASAP. Text works fastest if it's urgent.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", gap:"16px"}}>
                  <div>
                    <label style={{display:"block", fontSize:"12px", fontWeight:700, marginBottom:"6px", letterSpacing:"0.08em", textTransform:"uppercase"}}>Name</label>
                    <input
                      name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your name"
                      style={{width:"100%", padding:"12px 14px", border:"1.5px solid var(--border)", borderRadius:"var(--radius-sm)", fontSize:"14px", background:"var(--surface)"}}
                    />
                  </div>
                  <div>
                    <label style={{display:"block", fontSize:"12px", fontWeight:700, marginBottom:"6px", letterSpacing:"0.08em", textTransform:"uppercase"}}>Phone / Instagram</label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      placeholder="Best way to reach you back"
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
                  <button type="submit" className="btn btn-accent btn-lg" disabled={status === "sending"} style={{justifyContent:"center"}}>
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                  {status === "error" && (
                    <p style={{color:"var(--accent)", fontSize:"13px", textAlign:"center"}}>Something went wrong. Text us directly at 585-773-9393.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
