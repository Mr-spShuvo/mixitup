import React from 'react';

export default function Drink({ name, category, types }) {
  return React.createElement('div', {}, [
    React.createElement('h4', {}, name),
    React.createElement('h4', {}, types),
    React.createElement('h4', {}, category)
  ]);
}
