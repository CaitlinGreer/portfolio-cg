import React, { Component } from 'react'
import './AboutMe.css'

import travel from '../images/travelphoto.jpeg'

export default class AboutMe extends Component {
    render() {
        return (
            <div id="about" className='about-container'>
                <div className='about-content'>
                    <div className='about-heading'>
                        <h3>A Little About Myself</h3>
                    </div>
                    <p>After working as a hairstylist for most of my life I felt it was time for a change.  So I chose to hang up the shears and pick up the keyboard.  I've always had an interest in code and programming and there's no time like the present for a new career adventure.</p>

                    <p>My adventure into learning web development at <a href="https://bloc.thinkful.com/" >Bloc/Thinkful</a> has
                         been one of the most challenging and rewarding things I've ever done.  We all know that teamwork makes the dreamwork, so I'm looking forward to working on a team with other programmers and truly experiencing everything the industry has to offer.
                    </p>
                    <p>If you don't find me at my desk, you'll most likely find me bouncing around Disney World soaking up some Disney magic, spending some quality time with my two dogs or traveling anywhere I possibly can.</p>
                    <p>I provide a wide range of services from back end to front end developement, so let's build some things!  Reach out and let's talk about your project!
                    </p>
                </div>
                <div className="travel-img">
                    <img src={travel} alt="map and camera" className='travel-image' />
                </div>

            </div>
        )
    }
}