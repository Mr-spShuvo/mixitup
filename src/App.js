import React from 'react';
import ReactDOM from 'react-dom';

import Header from './modules/Header';
import Footer from './modules/Footer';
import Search from './modules/Search';
import Filters from './modules/Filters';
import SearchResults from './modules/SearchResults';

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <div className="content-box">
        <Filters />
        <SearchResults />
      </div>
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
