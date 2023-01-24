import React from 'react';
import github_logo from '../github-mark-white.png'
import '../index.css';
import '../App.css';
export default function Footer(){
    return(
        <div className='footer'>

        <span>Contribute </span>
        <a href="https://github.com/120EE0980/react_app"><img src={github_logo} alt="github"></img></a>
        </div>
    )
}