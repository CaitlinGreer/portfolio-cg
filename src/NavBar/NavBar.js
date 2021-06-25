import React, { Component } from 'react'

import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <div className='navbar-container'>
                <div className='nav-header'>
                    <h1>
                        <a href="#home" className='nav-header'>Caitlin Greer</a>
                    </h1>
                </div>

                <div className='nav-links-container'>
                    <ul className='nav-links'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Reach Out</a></li>
                    </ul>
                </div>

            </div>
        )
    }
}
