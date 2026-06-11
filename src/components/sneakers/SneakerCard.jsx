export default function SneakerCard({ item }) {
  const badgeClass = item.badge === "Hot" || item.badge === "Preorder" ? "badge-red"
    : item.badge === "Trending" ? "badge-black"
    : "badge-gray";

  return (
    <article className="sneaker-card">
      <div className="sneaker-card__image-wrap">
        {item.badge && <span className={`badge ${badgeClass} sneaker-card__badge`}>{item.badge}</span>}
        <img src={item.image} alt={item.name} className="sneaker-card__image" loading="lazy" />
      </div>
      <div className="sneaker-card__body">
        <p className="sneaker-card__brand">{item.brand}</p>
        <h3 className="sneaker-card__name">{item.name}</h3>
        <p className="sneaker-card__sizes">Sizes {item.sizes}</p>
        <div className="sneaker-card__footer">
          <span className="sneaker-card__price">{item.price}</span>
          <a
            href="https://respectmykickzny.company.site/products"
            target="_blank"
            rel="noopener noreferrer"
            className="sneaker-card__cta"
          >
            View
          </a>
        </div>
      </div>
    </article>
  );
}
