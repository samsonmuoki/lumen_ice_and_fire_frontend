import React from 'react';
const List = (props) => {
  const { books } = props;
  if (!books || books.length === 0) return <p>No books, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Books</h2>
      {books.map((book) => {
        return (
          <li key={book.id} className='list'>
            <span className='repo-text'>{book.name} </span>
            <span className='repo-description'>{book.description}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
