import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import '../App.css';
import withListLoading from './withListLoading';


const Character = (props) => {
    
    const { character } = props;
    if (!character || character.length === 0) return <p>Details not found, sorry</p>;
    return (
      <div className='single-book-details'>
        <div className='single-book-name'>Name: {character.name}</div>
        <div>Gender: {character.gender}</div>
        <div>Date of Birth: {character.date_of_birth}</div>
        <div>Age in Years: {character.age_in_years}</div>
        <div>Age in Months: {character.age_in_months}</div>
      </div>
    );
  };


function SingleCharacter() {
  const { id } = useParams()
  var url = 'https://lumen-ice-and-fire-muoki.herokuapp.com/api/characters/';
  var apiUrl = url.concat(id)
  const ListLoading = withListLoading(Character);
  const [appState, setAppState] = useState({
    loading: false,
    character: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    fetch(apiUrl)
      .then((res) => res.json())
      .then((character) => {
        setAppState({ loading: false, character: character });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} character={appState.character} />
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
export default SingleCharacter;
