import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useDropdown from '../modules/useDropdown';
import api from '../config';
import SearchResults from './SearchResults';

export default function Search() {
  const [cocktail, setCocktail] = useState([]);
  const [apiData, setApiData] = useState([]);

  async function getApiData() {
    try {
      const cocktailData = await axios.get(api().search + cocktail);
      setApiData(cocktailData.data.drinks || []);
    } catch (error) {
      console.log(error);
    }
  }

  const [cList, setCList] = useState([]);
  const [gList, setGList] = useState([]);
  const [tList, setTList] = useState([]);

  const [category, CategoryDropdown] = useDropdown(
    'Category',
    '',
    cList,
    'strCategory'
  );

  const [type, TypeDropdown] = useDropdown('Type', '', tList, 'strAlcoholic');
  const [glass, GlassDropdown] = useDropdown('Glass', '', gList, 'strGlass');

  useEffect(() => {
    axios.get(api().categoryList).then(res => {
      setCList(res.data.drinks);
    });
    axios.get(api().glassList).then(res => {
      setGList(res.data.drinks);
    });
    axios.get(api().typeList).then(res => {
      setTList(res.data.drinks);
    });
  }, [category, type, glass]);

  return (
    <>
      <div className="search">
        <form
          onSubmit={e => {
            e.preventDefault();
            getApiData();
          }}
        >
          <label htmlFor="searchKey">Search:</label>
          <input
            className="search__input"
            type="text"
            placeholder="Enter cocktail name..."
            name="searchKey"
            value={cocktail}
            onChange={e => setCocktail(e.target.value)}
          />
          <div className="filters">
            <h3 className="filters__title">
              Filters Option &nbsp;
              <span role="img" aria-label="filters">
                👋
              </span>
            </h3>
            <CategoryDropdown />
            <GlassDropdown />
            <TypeDropdown />
          </div>
          <input className="btn btn--dark" type="submit" value="Search" />
        </form>
      </div>
      <SearchResults cocktails={apiData} />
    </>
  );
}
