// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import BooksList from './components/BooksList';
import CharactersList from './components/CharactersList';

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
              <Link to="/books">Available Books</Link>
            </li>
            <li>
              <Link to="/characters">Available Characters</Link>
            </li>
          </ul>
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/books' element={< BooksList />}></Route>
            <Route exact path='/characters' element={< CharactersList />}></Route>
        </Routes>
      </div>
    </Router>
    );
  }
}

export default App;

