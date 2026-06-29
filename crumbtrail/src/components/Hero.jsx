export default function Hero({ children }) {
  return (
    <section className="hero">
      <div className="eyebrow">cook from what you have</div>
      <h1>
        What's in your <em>kitchen</em>, right now?
      </h1>
      <p className="sub">
        Type a dish, an ingredient, or tap a tag below. Crumbtrail pulls real
        recipes that fit — no extra trip to the store required.
      </p>
      <div className="search-wrap">{children}</div>
    </section>
  );
}
