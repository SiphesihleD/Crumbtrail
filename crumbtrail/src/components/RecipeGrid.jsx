import RecipeCard from './RecipeCard';

export function LoadingState() {
  return (
    <div className="state">
      <div className="state-card">
        <div className="spinner" />
        <h3>Flipping through the recipe box…</h3>
        <p>Searching for matches.</p>
      </div>
    </div>
  );
}

export function EmptyState() {
  return (
    <div className="state">
      <div className="state-card">
        <h3>No recipes match that combination.</h3>
        <p>Try a single ingredient, a simpler dish name, or tap one of the tags above.</p>
      </div>
    </div>
  );
}

export default function RecipeGrid({ meals }) {
  return (
    <div className="grid">
      {meals.map((meal, i) => (
        <RecipeCard
          key={meal.idMeal}
          meal={meal}
          style={{ animationDelay: `${i * 0.06}s` }}
        />
      ))}
    </div>
  );
}
