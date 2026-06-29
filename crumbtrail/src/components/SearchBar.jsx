export default function SearchBar({ value, onChange, onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(value);
  }

  return (
    <form className="search-card" onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder='e.g. chicken, lemon, or "carbonara"'
        autoComplete="off"
        aria-label="Search recipes"
      />
      <button className="search-btn" type="submit">
        Find recipes
      </button>
    </form>
  );
}
