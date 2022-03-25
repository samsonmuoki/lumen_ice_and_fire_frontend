import React, { useEffect, useState } from 'react';
import '../App.css';
import withListLoading from './withListLoading';


const List = (props) => {
    const { books } = props;
    if (!books || books.length === 0) return <p>No books, sorry</p>;
    return (
      <ul>
        <h2 className='list-head'>Available Books</h2>
        {books.map((book) => {
          return (
            <li key={book.id} className='list'>
              <span className='repo-text'> {book.name} </span>
              <div>Authors:{book.authors}</div>
              <div>Comments: <a href=''>{book.comments_count}</a></div>
              {/* <div>Characters: {book.bookscharacters}</div> todo*/}
            </li>
          );
        })}
      </ul>
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
        <h1>THE WORLD OF ICE AND FIRE</h1>
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
