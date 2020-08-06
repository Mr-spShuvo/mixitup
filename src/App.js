import React from 'react';
import ReactDOM from 'react-dom';
import Drink from './Drink';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h3', {}, '🍸 Mix!tUp'),
    React.createElement(Drink, {
      name: 'Margarita',
      category: 'Ordinary Drink',
      types: 'Alcoholic'
    }),
    React.createElement(Drink, {
      name: 'Margarita',
      category: 'Ordinary Drink',
      types: 'Alcoholic'
    }),
    React.createElement(Drink, {
      name: 'Margarita',
      category: 'Ordinary Drink',
      types: 'Alcoholic'
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
