const newArrivalItems = [
  {
    id: 1,
    badge: "Just In",
    brand: "Nike",
    name: "Air Max Plus Drift",
    price: "$210",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    badge: "Hot",
    brand: "Jordan",
    name: "Jordan 4 Retro",
    price: "$325",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    badge: "Trending",
    brand: "New Balance",
    name: "9060 Sea Salt",
    price: "$205",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    badge: "Popular",
    brand: "Adidas",
    name: "Samba OG",
    price: "$160",
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    badge: "New",
    brand: "ASICS",
    name: "Gel-Kayano 14",
    price: "$190",
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    badge: "Limited",
    brand: "Nike",
    name: "Dunk Low Vintage",
    price: "$185",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80",
  },
];

const newArrivalFilters = [
  "All",
  "Nike",
  "Jordan",
  "Adidas",
  "New Balance",
  "ASICS",
  "Lifestyle",
  "Running",
];

export default function NewArrivals() {
  return (
    <main className="new-arrivals-page">
      <section className="new-arrivals-shell">
        <div className="new-arrivals-hero">
          <div className="new-arrivals-hero-copy card-surface">
            <p className="eyebrow">Latest Drops</p>
            <h1>New arrivals with premium storefront energy.</h1>
            <p className="hero-text">
              A sharper arrivals experience with cleaner presentation, better
              hierarchy, and a more elevated marketplace feel.
            </p>

            <div className="hero-actions">
              <button className="btn-dark">Shop New Drops</button>
              <button className="btn-light">Browse Categories</button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>80+</strong>
                <span>Pairs this week</span>
              </div>
              <div>
                <strong>24H</strong>
                <span>Fast turnover</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Authentic only</span>
              </div>
            </div>
          </div>

          <div className="new-arrivals-hero-feature">
            <img
              src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1400&q=80"
              alt="Featured sneaker"
            />
            <div className="hero-feature-overlay">
              <div className="hero-feature-card">
                <p className="eyebrow eyebrow-light">Featured Drop</p>
                <h2>Nike Zoom Vomero 5</h2>
                <p>
                  Clean, versatile, and one of the strongest silhouettes in the
                  current rotation.
                </p>
                <div className="hero-feature-row">
                  <span>$260</span>
                  <button className="btn-white">View Pair</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="new-arrivals-filters">
          {newArrivalFilters.map((filter, index) => (
            <button
              key={filter}
              className={index === 0 ? "filter-pill active" : "filter-pill"}
            >
              {filter}
            </button>
          ))}
        </div>

        <section className="new-arrivals-grid-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Fresh Inventory</p>
              <h2>Just landed</h2>
            </div>
            <button className="btn-light">View All</button>
          </div>

          <div className="new-arrivals-grid">
            {newArrivalItems.map((item) => (
              <article key={item.id} className="arrival-card">
                <div className="arrival-card-media">
                  <img src={item.image} alt={item.name} />
                  <span className="arrival-badge">{item.badge}</span>
                </div>

                <div className="arrival-card-body">
                  <p className="arrival-brand">{item.brand}</p>

                  <div className="arrival-top-row">
                    <h3>{item.name}</h3>
                    <span className="arrival-price">{item.price}</span>
                  </div>

                  <div className="arrival-actions">
                    <button className="text-button">View Details</button>
                    <button className="btn-light small">Add to Cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="new-arrivals-bottom">
          <div className="bottom-dark-card">
            <p className="eyebrow eyebrow-light">Why It Hits</p>
            <h3>Built to feel curated, not crowded.</h3>

            <div className="bottom-points">
              <div>
                <strong>Luxury layout</strong>
                <p>
                  Bigger visual moments, stronger spacing, and less generic
                  product-grid energy.
                </p>
              </div>
              <div>
                <strong>Better product focus</strong>
                <p>
                  Cards are cleaner, product names are stronger, and the page
                  scans more like a premium storefront.
                </p>
              </div>
              <div>
                <strong>More conversion-ready</strong>
                <p>
                  The hero, filters, and featured product sections all feel more
                  intentional and higher-end.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom-light-card card-surface">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Upcoming Release Calendar</p>
                <h2>Coming next</h2>
              </div>
              <button className="btn-light">See More</button>
            </div>

            <div className="release-list">
              <div className="release-item">
                <div className="release-date">APR 03</div>
                <div className="release-copy">
                  <strong>Jordan 1 High OG</strong>
                  <p>Chicago-inspired premium release</p>
                </div>
                <div className="release-side">
                  <span>$285</span>
                  <button className="btn-light small">Notify Me</button>
                </div>
              </div>

              <div className="release-item">
                <div className="release-date">APR 05</div>
                <div className="release-copy">
                  <strong>Nike Kobe Protro</strong>
                  <p>Performance icon with collector demand</p>
                </div>
                <div className="release-side">
                  <span>$310</span>
                  <button className="btn-light small">Notify Me</button>
                </div>
              </div>

              <div className="release-item">
                <div className="release-date">APR 08</div>
                <div className="release-copy">
                  <strong>New Balance 1906R</strong>
                  <p>Retro runner with elevated finish</p>
                </div>
                <div className="release-side">
                  <span>$220</span>
                  <button className="btn-light small">Notify Me</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}