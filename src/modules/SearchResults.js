import React from 'react';
import Pagination from './Pagination';

export default function SearchResults() {
  return (
    <div className="results">
      <a href="#link" className="results__card">
        <div className="cocktail-box">
          <img
            className="cocktail-box__thumb"
            src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview"
            alt="Cocktail Thumbnails"
          />
          <div className="cocktail-box__info">
            <h3 className="cocktail-box__title">
              <span role="img" aria-label="drink">
                🍸
              </span>
              Margarita
            </h3>
            <p className="cocktail-box__meta">
              <span>
                <span role="img" aria-label="category">
                  🥂
                </span>
                Category:
              </span>
              Ordinary Drink
            </p>
            <p className="cocktail-box__meta">
              <span>
                <span role="img" aria-label="types">
                  🍹
                </span>{' '}
                Types:
              </span>{' '}
              Alcoholic
            </p>
            <p className="cocktail-box__meta">
              <span>
                <span role="img" aria-label="glass">
                  🥃
                </span>{' '}
                Glass:
              </span>{' '}
              Cocktail Glass
            </p>
            <a href="#link" className="cocktail-box__link btn btn--dark">
              MixItUp Instruction
            </a>
          </div>
        </div>
      </a>
      <Pagination />
    </div>
  );
}
