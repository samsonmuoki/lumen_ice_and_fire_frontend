import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import '../App.css';
import withListLoading from './withListLoading';


const Book = (props) => {
    const [content, setContent] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        var bookId = props.book.id;
        var url = 'https://lumen-ice-and-fire-muoki.herokuapp.com/api/comments?';
        var commentUrl = url.concat('book_id=').concat(bookId).concat('&').concat('content=').concat(content)
        const requestOptions = {
            method: 'POST',
        };
        fetch(commentUrl, requestOptions)
            .then(response => response.json());
      window.location.reload(false);
    }
    const { book } = props;
    if (!book || book.length === 0) return <p>Details not found, sorry</p>;
    return (
      <div className='single-book-details'>
        <div className='single-book-name'>{book.name}</div>
        <div>Authors: {book.authors}</div>
        <div>Published: {book.released}</div>
        <div className='single-book-characters-header'>CHARACTERS</div>
        <div className='single-book-characters-list'>
            {book.bookscharacters.map((character) =>
                <div key={character.id} className='card-character-details'>
                    <div className='character-id'>ID: {character.character_id} </div>
                    <div className='character-name'>Name: {character.character_name}</div>
                    <a href={'/characters/'.concat(character.id)}><div className='view-character-link'>View Character</div></a>
                </div>
            )}
        </div>
        <div className='single-book-comments'>
          <div className='comments-header'>COMMENTS</div>
            <form method='post' onSubmit={handleSubmit}>
                <div className='add-comment-header'> Add a comment</div>
                <textarea value={content} onInput={e => setContent(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <div className='single-book-comments-list'>
                {book.comments.map((comment) =>
                    <div key={comment.id} className='single-comment'>
                        <div className='comment-text'>Date: {comment.created_at} </div>
                        <div className='comment-text'>IP ADDRESS: {comment.ip_address} </div>
                        <div className='comment-content'>{comment.content} </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    );
  };


function SingleBook() {
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
