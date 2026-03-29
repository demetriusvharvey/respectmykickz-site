export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">RESPECTMYKICKZ</div>

      <nav className="navbar__links">
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">Brands</a>
        <a href="/">New Arrivals</a>
        <a href="/">Contact</a>
      </nav>

      <div className="navbar__actions">
        <button className="nav-btn">Search</button>
        <button className="nav-btn">Cart (0)</button>
      </div>
    </header>
  );
}