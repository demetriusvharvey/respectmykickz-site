import { Link } from "react-router-dom";
import AnnouncementBar from "../components/global/AnnouncementBar";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

export default function NotFound() {
  return (
    <div className="site-shell">
      <AnnouncementBar />
      <Navbar />
      <main className="qa-404">
        <div>
          <p className="eyebrow eyebrow--accent">404</p>
          <h1>That pair is gone.</h1>
          <p>The page you're looking for doesn't exist or the link has changed.</p>
          <div className="qa-404__actions">
            <Link to="/shop" className="btn btn-accent btn-lg">Shop Current Drop →</Link>
            <Link to="/" className="btn btn-outline-white btn-lg">Back Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
