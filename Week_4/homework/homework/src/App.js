import logo from './logo.svg';
import './styles.css';
import React, { useState, useEffect } from 'react';
import { apiKey } from './const/apiKey';
import currentWeather from './components/currentWeather/currentWeather';
import dayCard from './components/dayCard/dayCard'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
