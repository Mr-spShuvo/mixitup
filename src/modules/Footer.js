import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>
        Made with React + &nbsp;
        <a href="https://www.thecocktaildb.com/">TheCocktailDB</a> 👌
      </p>
      <p>
        &copy;
        <span role="img" aria-label="hi">
          👋
        </span>
        <a href="https://spshuvo.com">spshuvo.com</a> {new Date().getFullYear}
      </p>
    </footer>
  );
}
