import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import '../App.css';
import withListLoading from './withListLoading';


const Book = (props) => {
    function handleSubmit(e) {
        alert('Your comment was submitted:');
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer my-token',
                // 'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({ 
                book_id: 1,
                content: 'React Request Example' })
        };
        fetch('https://lumen-ice-and-fire-muoki.herokuapp.com/api/comments', requestOptions)
            .then(response => response.json());
            // .then(data => this.setState({ postId: data.id }));
    }
    const { book } = props;
    if (!book || book.length === 0) return <p>Details not found, sorry</p>;
    return (
      <div>
        <h2 className='list-head'>{book.name}</h2>
        <div>Authors: {book.authors}</div>
        <div>Published: {book.released}</div>
        <div>Characters: {book.bookscharacters[0].character_id}</div>
        <div>CHARACTERS</div>
        <ul>
            {book.bookscharacters.map((character) =>
                <li key={character.id} className='list'>
                    <span className='repo-text'>ID: {character.id} </span>
                    <div>Name: {character.name}</div>
                    <div><a href=''>View Character</a></div>
                </li>
            )}
        </ul>
        <div>COMMENTS
            <form method='post' onSubmit={handleSubmit}>
                <h1> Add a comment</h1>
                {/* <input type='textarea' name='content'/> */}
                <textarea name='content'/>
                {/* <input type='submit' value='Submit'/> */}
                <button type="submit">Submit</button>
            </form>
            <ul>
                {book.comments.map((comment) =>
                    <li key={comment.id} className='list'>
                        <div className='repo-text'>Date: {comment.created_at} </div>
                        <div className='repo-text'>Content: {comment.content} </div>
                        <div>IP ADDRESS: {comment.ip_address} </div>
                    </li>
                )}
            </ul>
        </div>
      </div>
    );
  };


function SingleBook(props) {
  const { id } = useParams()
  var url = 'https://lumen-ice-and-fire-muoki.herokuapp.com/api/books/';
  var apiUrl = url.concat(id)
  const ListLoading = withListLoading(Book);
  const [appState, setAppState] = useState({
    loading: false,
    book: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    fetch(apiUrl)
      .then((res) => res.json())
      .then((book) => {
        setAppState({ loading: false, book: book });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>THE WORLD OF ICE AND FIRE</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} book={appState.book} />
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
export default SingleBook;
