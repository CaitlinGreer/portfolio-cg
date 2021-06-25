import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className='nav-header'>
                    <h1>Caitlin Greer</h1>
                    <h2>Here For All Your Web Development Needs</h2>
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
