import React, { Component } from 'react'
import './HomePage.css'

import headshot from '../images/cgportfoliopic2.jpg'


export default class HomePage extends Component {
    render() {
        return (
            <div className="homepage-container" id='home'>
                <div className="headshot-container">
                    <div >
                        <img src={headshot} alt='caitlin' className="headshot" />
                    </div>
                </div>
                <div className="homepage-text">
                    <h2>Hey!  I'm Caitlin Greer</h2>

                    <h3>Coming at you live from Orlando, Florida</h3>
                    <p>As a new kid in the web developer world I find myself drawn to the concept of creating something from nothing.
                        I have been fortunate enough to spend most of my adult life working in a creative industry, face to face with people. 
                        The years I spent working in such an environment provided me with, what I often refer to as, my super power.  What 
                        power is that you ask?  It's the ability to take an idea and create something that exceeds client expectations
                        every time.
                    </p>

                </div>
            </div>
         )
    }
}