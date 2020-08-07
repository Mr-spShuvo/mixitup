import React from 'react';

export default function Drink({ name, category, types }) {
  return (
    <>
      <p>{`🥂 ${name} (${types}) - ${category}`}</p>
    </>
  );
}
