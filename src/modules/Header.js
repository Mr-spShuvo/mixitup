import React from 'react';

export default function Header() {
  return (
    <header>
      <h1 className="logo">
        <span role="img" aria-label="cocktail">
          🍸
        </span>{' '}
        Mix<span>!</span>tUp
      </h1>
      <p className="logo__subtitle">Bartenders Secret Sauce</p>
    </header>
  );
}
