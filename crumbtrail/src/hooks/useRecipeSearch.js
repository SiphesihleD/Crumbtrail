import { useState, useCallback } from 'react';
import { smartSearch } from '../api/mealdb';

/**
 * useRecipeSearch
 * Encapsulates all state + logic for searching recipes:
 * - query: the last searched term (for display, e.g. "Results for chicken")
 * - meals: the current result set
 * - status: 'idle' | 'loading' | 'success' | 'empty' | 'error'
 *
 * Keeping this in a hook (instead of inline in App) means the same
 * search logic could power a different UI later without rewriting it.
 */
export function useRecipeSearch() {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [status, setStatus] = useState('idle');

  const search = useCallback(async (term, options = {}) => {
    const trimmed = term.trim();
    if (!trimmed) return;

    setQuery(trimmed);
    setStatus('loading');

    try {
      const results = await smartSearch(trimmed, options);
      setMeals(results.slice(0, 12));
      setStatus(results.length === 0 ? 'empty' : 'success');
    } catch (err) {
      console.error('Recipe search failed:', err);
      setMeals([]);
      setStatus('error');
    }
  }, []);

  return { query, meals, status, search };
}
