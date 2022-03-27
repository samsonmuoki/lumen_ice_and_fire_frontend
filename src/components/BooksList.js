import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import withListLoading from './withListLoading';


const List = (props) => {
  const { books } = props;
  if (!books || books.length === 0) return <p>No books, sorry</p>;
  return (
    <div className='body'>
      {books.map((book) => {
        return (
          <div key={book.id} className='card-book'>
            <div className='book-title'>Title: {book.name} </div>
            <div>Authors: {book.authors}</div>
            <div>Comments: {book.comments_count}</div>
            <div>Published: {book.released}</div>
            <a href={'/books/'.concat(book.id)}><div className='view-book-link'>View Book</div></a>
          </div>
        );
      })}
    </div>
  );
};



function BooksList() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    books: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://lumen-ice-and-fire-muoki.herokuapp.com/api/books`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((books) => {
        setAppState({ loading: false, books: books });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} books={appState.books} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          by Samson Muoki
        </div>
      </footer>
    </div>
  );
}
export default BooksList;
