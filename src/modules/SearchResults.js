import React from 'react';

import Pagination from './Pagination';
import Cocktail from './Cocktail';

export default function SearchResults({ cocktails }) {
  return (
    <div className="content-box">
      <div className="results">
        {cocktails.length === 0 ? (
          <div className="results__card">
            <h1 className="results__not-found">
              No results found!
              <span>Try searching like - Margarita.</span>
            </h1>
          </div>
        ) : (
          cocktails.map(cocktail => (
            <Cocktail
              id={cocktail.idDrink}
              key={cocktail.idDrink}
              strDrink={cocktail.strDrink}
              strDrinkThumb={cocktail.strDrinkThumb}
              strAlcoholic={cocktail.strAlcoholic}
              strCategory={cocktail.strCategory}
              strGlass={cocktail.strGlass}
            />
          ))
        )}
        {cocktails.length > 0 ? <Pagination /> : ''}
      </div>
    </div>
  );
}
