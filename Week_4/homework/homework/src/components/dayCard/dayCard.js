import React from "react";
import { useState, useEffect } from "react";
import './styles.css';
import formatDate from '../../functions/formatDate';

export default function dayCard(props) {

    function currentWeather(index) {
        const oneDayWeather = {
            minTemp: Math.round(props.weather.daily[index].temp.min),
            maxTemp: Math.round(props.weather.daily[index].temp.max),
            image: weather.daily[props.index].weather.icon,
            date: formatDate(index)
        };
        return oneDayWeather;
    }
    return (
        <div id = 'flex-item'>
            
        </div>
    );
}