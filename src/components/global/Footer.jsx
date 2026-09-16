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
            Online-only sneaker drops focused on exclusive inventory, new releases, and authenticated pairs. Inventory changes as new product lands.
          </p>
          <div className="footer__contact">
            <div>Online only · No retail store hours</div>
            <div>💬 Text: <a href="sms:5857739393" style={{color:"rgba(250,250,248,0.55)"}}>585-773-9393</a></div>
          </div>
        </div>
        <div>
          <div className="footer__col-title">Shop</div>
          <div className="footer__links">
            <Link to="/shop">Current Drop</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/sell-trade">Sell or Trade</Link>
          </div>
        </div>
        <div>
          <div className="footer__col-title">Info</div>
          <div className="footer__links">
            <Link to="/contact">Contact</Link>
            <a href={IG} target="_blank" rel="noopener noreferrer">Drop Alerts on Instagram ↗</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__copy">© {year} Respect My Kickz. All rights reserved.</span>
        <span className="footer__copy">Secure online checkout powered by Shopify</span>
      </div>
    </footer>
  );
}
