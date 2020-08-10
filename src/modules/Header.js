import React from 'react';
import { Link } from '@reach/router';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1 className="logo">
          <span role="img" aria-label="cocktail">
            🍸
          </span>
          Mix<span>!</span>tUp
        </h1>
        <p className="logo__subtitle">Bartenders Secret Sauce</p>
      </Link>
    </header>
  );
}
