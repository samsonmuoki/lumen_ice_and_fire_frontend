import React, { useEffect, useState } from 'react';
import '../App.css';
import withListLoading from './withListLoading';


const List = (props) => {
    const { characters } = props;
    if (!characters || characters.length === 0) return <p>No characters, sorry</p>;
    return (
      <ul>
        <h2 className='list-head'>Available characters</h2>
        <div>
            Filter by GENDER: <select onchange="document.location.href=this.value">
                <option value='https://lumen-ice-and-fire-muoki.herokuapp.com/api/characters'>----</option>
                <option value='https://lumen-ice-and-fire-muoki.herokuapp.com/api/characters?gender=Female'>Female</option>
                <option value='https://lumen-ice-and-fire-muoki.herokuapp.com/api/characters?gender=Male'>Male</option>
            </select>
        </div>
        {characters.map((character) => {
          return (
            <li key={character.id} className='list'>
              <div><span className='repo-text'>NAME: {character.name} </span></div>
              <div>GENDER:{character.gender}</div>
              <div>AGE: <a href=''>{character.age_in_years}</a></div>
              {/* <div>Characters: {character.characterscharacters}</div> todo*/}
            </li>
          );
        })}
      </ul>
    );
  };


function CharactersList() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    characters: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://lumen-ice-and-fire-muoki.herokuapp.com/api/characters`;
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
export default CharactersList;
