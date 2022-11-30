import './styles.css';
import React, { useState, useEffect } from 'react';
import { apiKey } from './const/apiKey';
import currentWeather from './components/currentWeather/currentWeather';
import dayCard from './components/dayCard/dayCard'


function App() {
  return (
    <div className="App">
      <currentWeather></currentWeather>
      <div id = "five-day-weather">
        <dayCard></dayCard>
      </div>
    </div>
  );
}

export default App;
