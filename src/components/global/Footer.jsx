import { Link } from "react-router-dom";
const IG = "https://www.instagram.com/official_respectmykickz_/";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__logo">RESPECT<span>MY</span>KICKZ</div>
          <p className="footer__about">
            Authentic sneakers. Buy, sell, and trade exclusive kicks. We operate fully online — shop us on Instagram for the latest pairs.
          </p>
          <div className="footer__contact">
            <div>📱 DM on Instagram to order</div>
            <div>💬 Text: <a href="sms:5857739393" style={{color:"rgba(250,250,248,0.55)"}}>585-773-9393</a></div>
          </div>
        </div>
        <div>
          <div className="footer__col-title">Shop</div>
          <div className="footer__links">
            <a href={IG} target="_blank" rel="noopener noreferrer">Shop on Instagram ↗</a>
            <Link to="/shop">Browse Pairs</Link>
            <Link to="/sell-trade">Sell or Trade</Link>
          </div>
        </div>
        <div>
          <div className="footer__col-title">Info</div>
          <div className="footer__links">
            <Link to="/contact">Contact</Link>
            <a href={IG} target="_blank" rel="noopener noreferrer">@official_respectmykickz_</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__copy">© {year} Respect My Kickz. All rights reserved.</span>
        <a href={IG} target="_blank" rel="noopener noreferrer" className="footer__copy" style={{color:"rgba(250,250,248,0.35)"}}>Instagram ↗</a>
      </div>
    </footer>
  );
}
