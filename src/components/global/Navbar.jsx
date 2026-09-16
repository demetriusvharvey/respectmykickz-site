import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../store/CartContext";

const IG = "https://www.instagram.com/official_respectmykickz_/";
const LINKS = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Browse" },
  { to: "/sell-trade", label: "Sell & Trade" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  function close() { setOpen(false); }

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo" onClick={close}>RESPECT<span>MY</span>KICKZ</Link>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={pathname === l.to ? "active" : ""}>{l.label}</Link>
          ))}
        </nav>

        <div className="nav__actions">
          <Link to="/cart" className="nav__cart" aria-label={`Cart with ${count} item${count === 1 ? "" : "s"}`}>
            Cart <span>{count}</span>
          </Link>
          <a href={IG} target="_blank" rel="noopener noreferrer" className="nav__ig">Instagram ↗</a>
        </div>
        <button className="nav__mob" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="nav__mobile-menu">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} onClick={close} className={pathname === l.to ? "active" : ""}>
              {l.label}
            </Link>
          ))}
          <Link to="/cart" onClick={close}>Cart ({count})</Link>
          <a href={IG} target="_blank" rel="noopener noreferrer" onClick={close}>Instagram ↗</a>
        </div>
      )}
    </header>
  );
}
