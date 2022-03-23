import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    books: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://lumen-ice-and-fire-muoki.herokuapp.com/api/books`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((books) => {
        setAppState({ loading: false, books: books });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>ICE AND FIRE</h1>
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
export default App;

