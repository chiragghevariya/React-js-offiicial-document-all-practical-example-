import React from 'react';
import logo from './logo.svg';
import './App.css';

const nameArray = {
    Firstname:"Chirag",
    lastName:"Patel"
};

function concatinateName(data){
  return data.Firstname + ' ' + data.lastName;
} 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {concatinateName(nameArray)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
