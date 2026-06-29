export default function RecipeCard({ meal, style }) {
  // The /filter.php endpoint returns partial meal objects with no
  // strIngredient1..20 fields, so this gracefully falls back to "—"
  // instead of showing a misleading "0".
  const ingredientKeys = Object.keys(meal).filter(
    (k) => k.startsWith('strIngredient') && meal[k]?.trim()
  );
  const ingredientCount = ingredientKeys.length > 0 ? ingredientKeys.length : '—';

  return (
    <a
      className="card"
      style={style}
      href="#"
      onClick={(e) => e.preventDefault()}
    >
      <div className="stamp">
        {ingredientCount}
        <br />
        itm
      </div>
      <img
        className="card-img"
        src={meal.strMealThumb}
        alt={meal.strMeal}
        loading="lazy"
      />
      <div className="card-body">
        <div className="card-title">{meal.strMeal}</div>
        <div className="card-meta">
          <span>{meal.strArea || 'Unknown'}</span>
          <span>{meal.strCategory || ''}</span>
        </div>
      </div>
    </a>
  );
}
