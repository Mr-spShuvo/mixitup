import React, { useState } from 'react';

export default function Search() {
  const [cocktail, setCocktail] = useState([]);
  return (
    <div className="search">
      <form action="#">
        <label htmlFor="searchKey">Search:</label>
        <input
          className="search__input"
          type="text"
          placeholder="Enter cocktail name..."
          name="searchKey"
          value={cocktail}
          onChange={e => setCocktail(e.target.value)}
        />
        <input className="btn btn--dark" type="submit" value="Search" />
      </form>
    </div>
  );
}
