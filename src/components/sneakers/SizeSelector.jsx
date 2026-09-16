function sizeLabel(variant) {
  const size = variant.selectedOptions?.find((option) => option.name.toLowerCase() === "size");
  return size?.value || variant.title || "Default";
}

export default function SizeSelector({ variants = [], selectedId, onSelect }) {
  if (!variants.length) return null;

  return (
    <div className="size-selector">
      <div className="size-selector__label">Select Size</div>
      <div className="size-selector__grid">
        {variants.map((variant) => (
          <button
            key={variant.id}
            type="button"
            disabled={!variant.availableForSale}
            className={`size-selector__button${selectedId === variant.id ? " active" : ""}`}
            onClick={() => onSelect(variant.id)}
            aria-pressed={selectedId === variant.id}
          >
            {sizeLabel(variant)}
            {!variant.availableForSale && <span>Sold out</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
