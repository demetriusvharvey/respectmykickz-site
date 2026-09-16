import { Link } from "react-router-dom";
import { formatMoney } from "../../integrations/shopifyClient";

export default function SneakerCard({ item }) {
  const image = item.featuredImage?.url || item.image || item.images?.[0];
  const imageAlt = item.featuredImage?.altText || item.title || item.name;
  const price = item.priceRange?.minVariantPrice || (item.price ? { amount: String(item.price).replace(/[^0-9.]/g, ""), currencyCode: "USD" } : null);
  const handle = item.handle || item.id;
  const available = item.availableForSale !== false;

  return (
    <article className="sneaker-card">
      <Link to={`/products/${handle}`} className="sneaker-card__image-link" aria-label={`View ${item.title || item.name}`}>
        <div className="sneaker-card__image-wrap">
          {image
            ? <img src={image} alt={imageAlt} className="sneaker-card__image" loading="lazy" />
            : <div className="product-placeholder">No image</div>}
          {!available && <span className="badge badge-black sneaker-card__badge">Sold Out</span>}
        </div>
      </Link>
      <div className="sneaker-card__body">
        <p className="sneaker-card__brand">{item.vendor || item.brand || "Respect My Kickz"}</p>
        <Link to={`/products/${handle}`} className="sneaker-card__name">{item.title || item.name}</Link>
        <div className="sneaker-card__footer">
          <span className="sneaker-card__price">{price ? formatMoney(price) : ""}</span>
          <Link to={`/products/${handle}`} className="sneaker-card__cta">View</Link>
        </div>
      </div>
    </article>
  );
}
