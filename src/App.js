import React from 'react';
import ReactDOM from 'react-dom';
import Drink from './Drink';

const App = () => {
  return (
    <>
      <h1 className="logo">🍸 Mix<span>!</span>tUp </h1>
      <Drink name="Mojito" category="Classic" types="Alcoholic" />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
