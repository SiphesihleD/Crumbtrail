# Crumbtrail

A recipe finder that works backwards from what's already in your kitchen.
Search by dish name or ingredient, pulled live from TheMealDB's free API
(no API key required).

## File structure

```
crumbtrail/
├── index.html              # Vite entry, loads fonts (Fraunces, Sora, JetBrains Mono)
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx             # React entry point
    ├── App.jsx              # Top-level state + composition
    ├── api/
    │   └── mealdb.js        # fetch calls to TheMealDB
    ├── hooks/
    │   └── useRecipeSearch.js  # search state machine (idle/loading/success/empty/error)
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── SearchBar.jsx    # controlled input
    │   ├── ChipList.jsx     # ingredient quick-search tags
    │   ├── RecipeCard.jsx   # the punch-card signature element
    │   └── RecipeGrid.jsx   # grid + Loading/Empty states
    └── styles/
        └── index.css        # design tokens, layout, animations
```

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## What to practice next, in this same codebase

- **Routing**: add `react-router-dom`, give each recipe a detail page at
  `/recipe/:id` using `lookup.php?i=` from TheMealDB.
- **Context/Redux**: lift "favorited" recipes into a `FavoritesContext` or a
  Redux slice, persist to `localStorage`.
- **Next.js migration**: move this into a Next.js app, fetch the seeded
  "chicken" search server-side with `getServerSideProps` or a Server
  Component, and compare the data-fetching story to the current
  `useEffect` approach.
- **GraphQL**: TheMealDB doesn't expose GraphQL, but you can drop in a
  public GraphQL API (e.g. a recipes/food API on RapidAPI) and swap
  `mealdb.js` for a `client.js` using `graphql-request` or Apollo Client,
  keeping `useRecipeSearch` as the seam between data layer and UI.

## Design notes

- Palette: `--paper #F4F7F4`, `--ink #16302B`, `--lime #C7E04E` /
  `--lime-deep #9FB832`, `--coral #FF7A59` (reserved for a future
  favorite/heart state).
- Type: Fraunces (display), Sora (UI/body), JetBrains Mono (stats/data).
- Signature element: `.card` in `index.css` — the punch-hole, dashed
  stitch edge, and rotating ingredient-count stamp.
