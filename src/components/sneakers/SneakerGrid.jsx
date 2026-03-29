import SneakerCard from "./SneakerCard";

export default function SneakerGrid({ items }) {
  return (
    <div className="sneaker-grid">
      {items.map((item) => (
        <SneakerCard key={item.id} item={item} />
      ))}
    </div>
  );
}