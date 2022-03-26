import React, { useEffect, useState } from 'react';
import '../App.css';
import withListLoading from './withListLoading';


const List = (props) => {
  const { characters } = props;
  if (!characters || characters.length === 0) return <p>No characters, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available characters</h2>
      <div>Total characters: {characters.number_of_characters}</div>
      <div>Total Age in years: {characters.total_age_in_years}</div>
      <div>Total Age in months: {characters.total_age_in_months}</div>
      {characters.characters.map((character) => {
        return (
          <li key={character.id} className='list'>
            <div><span className='repo-text'>NAME: {character.name} </span></div>
            <div>GENDER:{character.gender}</div>
            <div>AGE IN YEARS: <a href=''>{character.age_in_years}</a></div>
            <div>AGE IN MONTHS: <a href=''>{character.age_in_months}</a></div>
          </li>
        );
      })}
    </ul>
  );
};


function MaleCharactersList() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    characters: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    var apiUrl = `https://lumen-ice-and-fire-muoki.herokuapp.com/api/characters?gender=Male`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((characters) => {
        setAppState({ loading: false, characters: characters });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>THE WORLD OF ICE AND FIRE</h1>
      </div>
      <div>
        Filter by GENDER:
        <div><a href='/characters'>All</a></div>
        <div><a href='/characters/female'>Female</a></div>
        <div><a href='/characters/male'>Male</a></div>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} characters={appState.characters} />
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
export default MaleCharactersList;
