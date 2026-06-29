const TAGS = ['chicken', 'lemon', 'basil', 'egg', 'tomato', 'rice', 'garlic'];

export default function ChipList({ active, onSelect }) {
  return (
    <div className="chips">
      {TAGS.map((tag, i) => (
        <button
          key={tag}
          type="button"
          className={`chip ${active === tag ? 'active' : ''}`}
          style={{ animationDelay: `${0.1 + i * 0.06}s` }}
          onClick={() => onSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
