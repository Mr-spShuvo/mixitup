import React, { useContext } from 'react';

import SearchContext from './SearchContext';

const useDropdown = (label, optionList, optionName) => {
  const [searchParams, setSearchParams] = useContext(SearchContext);

  const id = `use-dropdown-${label.replace(' ', '')}`;

  const handleSubmit = e =>
    setSearchParams(prev => ({ ...prev, [optionName]: e.target.value }));

  const dropdown = () => (
    <div className="filters-box">
      <label htmlFor={label}>{label}</label>
      <select
        id={id}
        className="filters-box__input"
        name="category"
        value={searchParams[optionName]}
        onChange={handleSubmit}
        onBlur={handleSubmit}
      >
        <option value="">Select Drinks {label}</option>
        {optionList.map(e => (
          <option key={e[optionName]} value={e[optionName]}>
            {e[optionName]}
          </option>
        ))}
      </select>
    </div>
  );

  return [searchParams[optionName], dropdown];
};

export default useDropdown;
