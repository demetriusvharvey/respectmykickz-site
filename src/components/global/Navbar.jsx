import { useState } from "react";
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

        <a href={IG} target="_blank" rel="noopener noreferrer" className="nav__ig">Instagram ↗</a>
        <button className="nav__mob" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position: "absolute", top: "58px", left: 0, right: 0,
          background: "var(--black)", zIndex: 99,
          borderBottom: "1px solid rgba(250,250,248,0.1)",
        }}>
          {LINKS.map((l) => (
            <Link
              key={l.to} to={l.to}
              onClick={close}
              style={{
                display: "block",
                padding: "18px 24px",
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem", fontWeight: 900,
                textTransform: "uppercase", letterSpacing: "0.08em",
                color: pathname === l.to ? "var(--white)" : "rgba(250,250,248,0.5)",
                borderBottom: "1px solid rgba(250,250,248,0.07)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={IG} target="_blank" rel="noopener noreferrer"
            onClick={close}
            style={{
              display: "block", padding: "18px 24px",
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem", fontWeight: 900,
              textTransform: "uppercase", letterSpacing: "0.08em",
              color: "var(--red)",
            }}
          >
            Instagram ↗
          </a>
        </div>
      )}
    </header>
  );
}
