import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const IG = "https://www.instagram.com/official_respectmykickz_/";
const LINKS = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Browse" },
  { to: "/sell-trade", label: "Sell & Trade" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">RESPECT<span>MY</span>KICKZ</Link>
        <nav className="nav__links">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={pathname === l.to ? "active" : ""}>{l.label}</Link>
          ))}
        </nav>
        <a href={IG} target="_blank" rel="noopener noreferrer" className="nav__ig">Instagram ↗</a>
        <button className="nav__mob" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </header>
  );
}
