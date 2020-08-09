import React from 'react';
import ReactDOM from 'react-dom';

import Header from './modules/Header';
import Footer from './modules/Footer';
import Search from './modules/Search';

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
