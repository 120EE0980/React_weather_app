import React from 'react';
import '../App.css';
import '../index.css';

export default function Header(props){
    return(
    <>
    <h2 className='header'>WEATHER-FORECAST by {props.name}</h2>
    </>
    )
}