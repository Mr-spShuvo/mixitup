import React from 'react';

export default function Pagination() {
  return (
    <div className="pagination">
      <a className="pagination__link pagination__link--disabled" href="#prev">
        <span role="img" aria-label="previous">
          👈
        </span>{' '}
        Previous
      </a>
      <a className="pagination__link" href="#next">
        Next{' '}
        <span role="img" aria-label="next">
          👉
        </span>
      </a>
    </div>
  );
}
