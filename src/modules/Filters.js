import React, { useState, useEffect } from 'react';
import useDropdown from '../modules/useDropdown';
import axios from 'axios';
import api from '../config';

export default function Filters() {
  const [cList, setCList] = useState([]);
  const [gList, setGList] = useState([]);
  const [tList, setTList] = useState([]);
  const [category, CategoryDropdown] = useDropdown(
    'Category',
    '',
    cList,
    'strCategory'
  );

  const [type, TypeDropdown] = useDropdown(
    'Type',
    '',
    tList,
    'strAlcoholic'
  );

  const [glass, GlassDropdown] = useDropdown(
    'Glass',
    '',
    gList,
    'strGlass'
  );

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
    <div className="filters">
      <code></code>
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
  );
}
