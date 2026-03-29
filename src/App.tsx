type Product = {
  id: number;
  brand: string;
  name: string;
  price: string;
  sizes: string;
  badge?: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    brand: "Nike",
    name: "Dunk Low Panda",
    price: "$160",
    sizes: "Sizes 7-13",
    badge: "Hot",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    brand: "Jordan",
    name: "Jordan 4 Retro",
    price: "$285",
    sizes: "Sizes 8-12",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    brand: "Adidas",
    name: "Yeezy Boost 350",
    price: "$240",
    sizes: "Sizes 6-11",
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    brand: "New Balance",
    name: "9060",
    price: "$210",
    sizes: "Sizes 8-12",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    brand: "ASICS",
    name: "Gel-Kayano 14",
    price: "$190",
    sizes: "Sizes 8-12",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    brand: "Nike",
    name: "Air Max Plus",
    price: "$175",
    sizes: "Sizes 7-12",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
  },
];

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      AUTHENTIC SNEAKERS • SAME DAY SHIPPING ON SELECT ORDERS • LIMITED DROPS
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="logo">RESPECTMYKICKZ</div>

        <nav className="nav">
          <a href="#">New Arrivals</a>
          <a href="#">Sneakers</a>
          <a href="#">Brands</a>
          <a href="#">Apparel</a>
          <a href="#">Sale</a>
        </nav>

        <div className="header__actions">
          <button className="ghost-btn">Search</button>
          <button className="ghost-btn">Account</button>
          <button className="dark-btn">Cart (0)</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__left">
        <p className="eyebrow">CURATED SNEAKER INVENTORY</p>
        <h1>Modern sneaker marketplace with premium resale energy.</h1>
        <p className="hero__text">
          Clean layout, bold product focus, and a storefront style that feels
          more premium than a basic demo shop.
        </p>

        <div className="hero__actions">
          <button className="dark-btn dark-btn--large">Shop Collection</button>
          <button className="ghost-btn ghost-btn--large">Browse Latest</button>
        </div>

        <div className="hero__stats">
          <div>
            <strong>500+</strong>
            <span>Pairs listed</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Authenticity focus</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Online access</span>
          </div>
        </div>
      </div>

      <div className="hero__right">
        <div className="hero-card hero-card--large">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
            alt="Featured sneaker"
          />
          <div className="hero-card__overlay">
            <span>Featured Drop</span>
            <h3>Nike Dunk Low Panda</h3>
            <p>Clean everyday pair with resale appeal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryStrip() {
  const items = [
    "Jordan",
    "Nike",
    "Adidas",
    "New Balance",
    "ASICS",
    "Streetwear",
  ];

  return (
    <section className="category-strip">
      {items.map((item) => (
        <button key={item} className="category-pill">
          {item}
        </button>
      ))}
    </section>
  );
}

function SectionHeader({
  label,
  title,
  action,
}: {
  label: string;
  title: string;
  action: string;
}) {
  return (
    <div className="section-header">
      <div>
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      <button className="ghost-btn">{action}</button>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        {product.badge ? (
          <span className="product-card__badge">{product.badge}</span>
        ) : null}

        <img src={product.image} alt={product.name} className="product-card__image" />
      </div>

      <div className="product-card__body">
        <p className="product-card__brand">{product.brand}</p>
        <h3>{product.name}</h3>
        <p className="product-card__sizes">{product.sizes}</p>

        <div className="product-card__footer">
          <span className="product-card__price">{product.price}</span>
          <button className="dark-btn">View</button>
        </div>
      </div>
    </article>
  );
}

function ProductGrid() {
  return (
    <section className="section">
      <SectionHeader
        label="Featured Inventory"
        title="Popular right now"
        action="View All"
      />

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="promo-banner">
      <div>
        <p className="section-label section-label--light">Why shop here</p>
        <h2>Built for sneakerheads, not generic storefront vibes.</h2>
      </div>

      <div className="promo-banner__points">
        <div>
          <strong>Authenticity Focus</strong>
          <p>Clean inventory presentation with trust-first messaging.</p>
        </div>
        <div>
          <strong>Fast Checkout</strong>
          <p>Ready to connect to Shopify for real payment flow.</p>
        </div>
        <div>
          <strong>Premium UI</strong>
          <p>Minimal, bold, and designed around product-first browsing.</p>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="newsletter">
      <div>
        <p className="section-label">Stay in the loop</p>
        <h2>Get notified for new drops and restocks.</h2>
      </div>

      <form className="newsletter__form">
        <input type="email" placeholder="Enter your email" />
        <button className="dark-btn" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <h3>RESPECTMYKICKZ</h3>
        <p>
          Premium sneaker storefront template with a stronger layout, better
          hierarchy, and a real brand feel.
        </p>
      </div>

      <div>
        <h4>Shop</h4>
        <a href="#">Sneakers</a>
        <a href="#">New Arrivals</a>
        <a href="#">Best Sellers</a>
        <a href="#">Sale</a>
      </div>

      <div>
        <h4>Support</h4>
        <a href="#">Contact</a>
        <a href="#">Shipping</a>
        <a href="#">Returns</a>
        <a href="#">FAQ</a>
      </div>

      <div>
        <h4>Company</h4>
        <a href="#">About</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <AnnouncementBar />
      <Header />
      <Hero />
      <CategoryStrip />
      <ProductGrid />
      <PromoBanner />
      <Newsletter />
      <Footer />
    </div>
  );
}