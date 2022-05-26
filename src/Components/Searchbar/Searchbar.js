// import { Notification } from 'react-pnotify';
import './Searchbar.css';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export default function Searchbar({ getSearchQery }) {
  const [searchQery, setSearchQery] = useState('');

  const onChange = e => {
    const { value } = e.target;
    setSearchQery(value.toLowerCase());
  };

  const onSubmit = e => {
    e.preventDefault();

    if (searchQery.trim('') === '') {
      return toast('Введите что-то в поиск');
    }

    getSearchQery(searchQery);

    // setSearchQery('');
  };

  return (
    <section className="Searchbar">
      <form className="Form" onSubmit={onSubmit}>
        <button type="submit" className="Button">
          <span className="Button-label">Search</span>
        </button>

        <input
          className="Input"
          type="text"
          value={searchQery}
          autoComplete="off"
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </form>
      <ToastContainer />
    </section>
  );
}
