import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import ChipList from './components/ChipList';
import RecipeGrid, { LoadingState, EmptyState } from './components/RecipeGrid';
import { useRecipeSearch } from './hooks/useRecipeSearch';
import './styles/index.css';

export default function App() {
  const { query, meals, status, search } = useRecipeSearch();
  const [inputValue, setInputValue] = useState('');
  const [activeChip, setActiveChip] = useState(null);

  // Seed the page with results on first load so it isn't an empty shell.
  useEffect(() => {
    search('chicken', { byIngredient: true });
    setActiveChip('chicken');
    setInputValue('chicken');
  }, [search]);

  function handleSearchSubmit(term) {
    setActiveChip(null);
    search(term);
  }

  function handleChipSelect(tag) {
    setActiveChip(tag);
    setInputValue(tag);
    search(tag, { byIngredient: true });
  }

  return (
    <>
      <Navbar />

      <Hero>
        <SearchBar
          value={inputValue}
          onChange={setInputValue}
          onSubmit={handleSearchSubmit}
        />
        <ChipList active={activeChip} onSelect={handleChipSelect} />
      </Hero>

      <div className="results-head">
        <h2>{query ? `Results for “${query}”` : 'Start typing above'}</h2>
        <span className="results-count">
          {status === 'success' ? `${meals.length} found` : ''}
        </span>
      </div>

      {status === 'loading' && <LoadingState />}
      {(status === 'empty' || status === 'error') && <EmptyState />}
      {status === 'success' && <RecipeGrid meals={meals} />}

      <footer>
        <span>CRUMBTRAIL · index-card recipe finder</span>
        <span>palette: pine #16302B · lime #C7E04E · coral #FF7A59</span>
      </footer>
    </>
  );
}
