import React, { useState } from 'react';

const useDropdown = (label, defaultState, optionList, optionName) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '')}`;

  const dropdown = () => (
    <div className="filters-box">
      <label htmlFor={label}>{label}</label>
      <select
        id={id}
        className="filters-box__input"
        name="category"
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
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

  return [state, dropdown, setState];
};

export default useDropdown;
