import React from "react";
import { useState, useEffect } from "react";
import './styles.css';
import formatDate from '../../functions/formatDate';

export default function currentWeather(props) {
    const todayWeather = {
        // todaysAQI: aqi,
        temp: Math.round(props.weather.current.temp),
        image: props.weather.current.weather.icon,
        description: props.weather.current.weather.description,
        date: formatDate(0)
    };
    return (
        <div id = 'todays-weather'>
            <h2>{todayWeather.date}</h2>
            <h1>{props.city.fullName}</h1>
            {/* <img src="" */}
            <p>{todayWeather.description}</p>
            <h1>{todayWeather.temp}</h1>
            <p>{props.AQI}</p>
        </div>
    );
}