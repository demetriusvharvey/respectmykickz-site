export default function SneakerCard({ item }) {
  return (
    <article className="sneaker-card">
      <div className="sneaker-card__image-wrap">
        <img src={item.image} alt={item.name} className="sneaker-card__image" />
      </div>

      <div className="sneaker-card__body">
        <p className="sneaker-card__brand">{item.brand}</p>
        <h3>{item.name}</h3>
        <p className="sneaker-card__size">{item.size}</p>

        <div className="sneaker-card__footer">
          <span className="sneaker-card__price">{item.price}</span>
          <button className="card-btn">View</button>
        </div>
      </div>
    </article>
  );
}