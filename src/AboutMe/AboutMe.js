import React, { Component } from 'react'
import Skills from '../Skills/Skills'

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
                    <p>After working as a hairstylist for most of my life I felt it was time for a change.
                        So I chose to hang up the shears and pick up the keyboard.  I've always had an 
                        interest in code and programming and there's no time like the present for a new 
                        career adventure.</p>

                    <p>My adventure into learning web development at <a href="https://bloc.thinkful.com/" >Bloc/Thinkful</a> has
                         been one of the most challenging and rewarding things I've ever done.  
                         We all know that teamwork makes the dreamwork, so I'm always looking to work with a team or 
                         collaborate with other developers and truly experiencing everything the industry has to offer.
                    </p>
                    <p>If you don't find me at my desk, you'll most likely find me bouncing around Disney World soaking 
                        up some Disney magic, button smashing on my Xbox, spending some quality time with my two dogs or 
                        traveling anywhere I possibly can.</p>
                                       
                    <p>I provide a wide range of services from back end to front end development, so let's build some things!
                       Reach out and let's talk about your project!
                    </p>
                    <div className='p'>My Skills include but aren't limited to:
                      
                        <Skills />
                        
                    </div> 
                </div>
                <div className="travel-img">
                    <img src={travel} alt="map and camera" className='travel-image' />
                </div>

            </div>
        )
    }
}