import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import Header from './modules/Header';
import Footer from './modules/Footer';
import Search from './modules/Search';
import Details from './modules/Details';
import SearchContext from './modules/SearchContext';

const App = () => {
  const searchContext = useState({});
  return (
    <React.StrictMode>
      <SearchContext.Provider value={searchContext}>
        <Header />
        <Router>
          <Search path="/" />
          <Details path="/details/:id" />
        </Router>
        <Footer />
      </SearchContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
