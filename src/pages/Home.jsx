import Navbar from "../components/global/Navbar";
import AnnouncementBar from "../components/global/AnnouncementBar";
import Footer from "../components/global/Footer";
import SneakerGrid from "../components/sneakers/SneakerGrid";

const featuredSneakers = [
  {
    id: 1,
    name: "Jordan 4 Retro Bred Reimagined",
    brand: "Jordan",
    price: "$285",
    size: "Sizes 8-12",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Nike Dunk Low Panda",
    brand: "Nike",
    price: "$160",
    size: "Sizes 7-13",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Yeezy Boost 350 V2",
    brand: "Adidas",
    price: "$240",
    size: "Sizes 6-11",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "New Balance 9060",
    brand: "New Balance",
    price: "$210",
    size: "Sizes 8-12",
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <AnnouncementBar />
      <Navbar />

      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">AUTHENTIC SNEAKERS • STREETWEAR • FAST SHIPPING</p>
          <h1>Premium sneakers, clean layout, resale energy.</h1>
          <p className="hero__text">
            Built for a modern sneaker store with a StockX / Flight Club inspired feel.
          </p>

          <div className="hero__actions">
            <button className="primary-btn">Shop Sneakers</button>
            <button className="secondary-btn">Latest Drops</button>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="section-label">Featured Inventory</p>
            <h2>Popular right now</h2>
          </div>
          <button className="view-all-btn">View All</button>
        </div>

        <SneakerGrid items={featuredSneakers} />
      </section>

      <section className="info-strip">
        <div>100% Authentic Guarantee</div>
        <div>Secure Checkout</div>
        <div>Fast Order Processing</div>
      </section>

      <Footer />
    </div>
  );
}