import React, { useEffect, useState } from 'react';
import '../App.css';
import withListLoading from './withListLoading';



const List = (props) => {
  const { characters } = props;
  if (!characters || characters.length === 0) return <p>No characters, sorry</p>;
  return (
    <div>
      <div className='characters-summary'>
        <div className='characters-summary-text'>Total characters: {characters.number_of_characters}</div>
        <div className='characters-summary-text'>Total Age in years: {characters.total_age_in_years}</div>
        <div className='characters-summary-text'>Total Age in months: {characters.total_age_in_months}</div>
      </div>
      {characters.characters.map((character) => {
        return (
          <div key={character.id} className='character-details'>
            <div><span className='repo-text'>NAME: {character.name} </span></div>
            <div>GENDER:{character.gender}</div>
            <div>AGE IN YEARS: {character.age_in_years}</div>
            <div>AGE IN MONTHS: {character.age_in_months}</div>
            <a href={'/characters/'.concat(character.id)}><div className='view-character-link'>View Character</div></a>
          </div>
        );
      })}
    </div>
  );
};


function SortCharactersByGenderDescending() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    characters: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    var apiUrl = `https://lumen-ice-and-fire-muoki.herokuapp.com/api/characters?sort_by_gender=desc`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((characters) => {
        setAppState({ loading: false, characters: characters });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='Filters'>
        Filter by GENDER:
        <div><a href='/characters'>All</a></div>
        <div><a href='/characters/female'>Female</a></div>
        <div><a href='/characters/male'>Male</a></div>
      </div>
      <div className='Sorts'>
        <div className='sort-by'>
        Sort by GENDER:
          <div><a href='/characters/sort_by_gender_asc'>Ascending</a></div>
          <div><a href='/characters/sort_by_gender_desc'>Descending</a></div>
        </div>
        <div className='sort-by'>
          Sort by AGE:
          <div><a href='/characters/sort_by_age_asc'>Ascending</a></div>
          <div><a href='/characters/sort_by_age_desc'>Descending</a></div>
        </div>
        <div className='sort-by'>
          Sort by NAME:
          <div><a href='/characters/sort_by_name_asc'>Ascending</a></div>
          <div><a href='/characters/sort_by_name_desc'>Descending</a></div>
        </div>
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
export default SortCharactersByGenderDescending;
