import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import useDropdown from '../modules/useDropdown';
import api from '../config';
import SearchResults from './SearchResults';
import SearchContext from './SearchContext';

export default function Search() {
  const [loader, setLoader] = useState(false);
  const [cList, setCList] = useState([]);
  const [gList, setGList] = useState([]);
  const [tList, setTList] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [searchParams, setSearchParams] = useContext(SearchContext);

  async function getApiData() {
    try {
      const cocktailData = await axios.get(
        api().search + searchParams.searchKey
      );
      setApiData(cocktailData.data.drinks || []);
      setLoader(false);
    } catch (error) {
      console.log(error); //eslint-disable-line
    }
  }

  const [category, CategoryDropdown] = useDropdown(
    'Category',
    cList,
    'strCategory'
  );

  const [type, TypeDropdown] = useDropdown('Type', tList, 'strAlcoholic');
  const [glass, GlassDropdown] = useDropdown('Glass', gList, 'strGlass');

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
    if (searchParams.searchKey) {
      getApiData();
      setLoader(true);
    }
  }, [category, type, glass, searchParams]); // eslint-disable-line

  let filteredData = apiData;
  if (type) {
    filteredData = filteredData.filter(item => item.strAlcoholic == type);
  }
  if (category) {
    filteredData = filteredData.filter(item => item.strCategory == category);
  }
  if (glass) {
    filteredData = filteredData.filter(item => item.strGlass == glass);
  }

  return (
    <>
      <div className="search">
        <form
          onSubmit={e => {
            e.preventDefault();
            setLoader(true);
            getApiData();
          }}
        >
          <label htmlFor="searchKey">Search:</label>
          <input
            className="search__input"
            type="text"
            placeholder="Enter cocktail name..."
            name="searchKey"
            value={searchParams.searchKey}
            onChange={e => {
              setSearchParams({ searchKey: e.target.value });
            }}
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
      {loader ? (
        <div className="loading loading--home">
          <span aria-label="loader icon"></span>
        </div>
      ) : (
        <SearchResults cocktails={filteredData} />
      )}
    </>
  );
}
