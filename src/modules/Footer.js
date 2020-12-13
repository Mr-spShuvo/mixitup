import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        Made with React + &nbsp;
        <a href="https://www.thecocktaildb.com/">TheCocktailDB</a> 👌
      </div>
      <div>
        &copy;
        <span role="img" aria-label="hi">
          👋
        </span>
        <a href="https://spshuvo.com">spshuvo.com</a> {year}
      </div>
    </footer>
  );
}
