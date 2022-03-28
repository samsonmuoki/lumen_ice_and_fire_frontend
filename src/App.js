// import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import BooksList from './components/BooksList';
import SingleBook from './components/SingleBook';
import SingleCharacter from './components/SingleCharacter';
import CharactersList from './components/CharactersList';
import FemaleCharactersList from './components/FemaleCharactersList';
import MaleCharactersList from './components/MaleCharactersList';
import SortCharactersByGenderAscending from './components/SortCharactersByGenderAscending';
import SortCharactersByGenderDescending from './components/SortCharactersByGenderDescending';
import SortCharactersByAgeAscending from './components/SortCharactersByAgeAscending';
import SortCharactersByAgeDescending from './components/SortCharactersByAgeDescending';
import SortCharactersByNameAscending from './components/SortCharactersByNameAscending';
import SortCharactersByNameDescending from './components/SortCharactersByNameDescending';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
          </ul>
          <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/books' element={< BooksList />}></Route>
              <Route exact path='/books/:id' element={< SingleBook />}></Route>
              <Route exact path='/books/:id/comments' element={< SingleBook />}></Route>
              <Route exact path='/characters' element={< CharactersList />}></Route>
              <Route exact path='/characters/:id' element={< SingleCharacter />}></Route>
              <Route exact path='/characters/female' element={< FemaleCharactersList />}></Route>
              <Route exact path='/characters/male' element={< MaleCharactersList />}></Route>
              <Route exact path='/characters/sort_by_gender_asc' element={< SortCharactersByGenderAscending />}></Route>
              <Route exact path='/characters/sort_by_gender_desc' element={< SortCharactersByGenderDescending />}></Route>
              <Route exact path='/characters/sort_by_age_asc' element={< SortCharactersByAgeAscending />}></Route>
              <Route exact path='/characters/sort_by_age_desc' element={< SortCharactersByAgeDescending />}></Route>
              <Route exact path='/characters/sort_by_name_asc' element={< SortCharactersByNameAscending />}></Route>
              <Route exact path='/characters/sort_by_name_desc' element={< SortCharactersByNameDescending />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

