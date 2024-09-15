import React, { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />

        <svg
          type="button"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="black"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </form>
    </header>
  );
}
