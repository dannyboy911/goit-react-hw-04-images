import React from 'react';

export default function Button({ onClick }) {
  return (
    <button type="button" className="button-load-more" onClick={onClick}>
      Load more
    </button>
  );
}
