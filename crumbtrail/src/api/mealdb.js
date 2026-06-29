const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

/**
 * Search recipes by dish name (e.g. "carbonara").
 */
export async function searchByName(query) {
  const res = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error('Network response was not ok');
  const data = await res.json();
  return data.meals || [];
}

/**
 * Search recipes by a single ingredient (e.g. "chicken").
 * Note: this endpoint returns partial meal objects (no full ingredient list),
 * which is why the ingredient-count badge falls back gracefully in RecipeCard.
 */
export async function searchByIngredient(ingredient) {
  const res = await fetch(`${BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`);
  if (!res.ok) throw new Error('Network response was not ok');
  const data = await res.json();
  return data.meals || [];
}

/**
 * Smart search: try by dish name first, fall back to ingredient search
 * if nothing matches. Mirrors how a person actually searches.
 */
export async function smartSearch(query, { byIngredient = false } = {}) {
  if (byIngredient) {
    return searchByIngredient(query);
  }
  const meals = await searchByName(query);
  if (meals.length === 0) {
    return searchByIngredient(query);
  }
  return meals;
}
