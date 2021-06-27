import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div id='contact' className='contact-form-container'>
                <h3 className='page-heading'>Reach Out</h3>

                <div className='contact-form'>
                    <form
                        action="https://formspree.io/f/mbjqkgdl"
                        method="POST"
                    >
                        <fieldset className='contact-form-fieldset' >
                            <legend>Send Me An Email</legend>
                            <label htmlFor='user-name' className='text-input-label'>Name:</label>
                            <input
                                className='text-input'
                                type='text'
                                id='user-name'
                                name='name'
                                placeholder='Tell Me Your Name!'
                            />
                            <br />
                            <label htmlFor='email' className='text-input-label'>Email:</label>
                            <input
                                className='text-input'
                                type='text'
                                id='email'
                                name='email'
                                placeholder="What's your email?"
                            />
                            <br />
                            <label htmlFor='form-message' className='text-input-label'>Your Message:</label>
                            <textarea
                                className='text-input'
                                type='text'
                                id='form-message'
                                name='message'
                                placeholder="Let's chat!"
                            >

                            </textarea>


                            <br />
                            <button type="submit" className='submit-button'>Submit</button>
                        </fieldset>
                    </form>
                </div>

                <div className='contact-links-container'>
                    <h3>Or find me at any of the following:</h3>
                    <ul className='contact-links'>
                        <li>
                            <a href='https://github.com/CaitlinGreer'>
                                <FontAwesomeIcon icon={faGithubSquare} className='github' /> 
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/caitlingreer/'>
                                <FontAwesomeIcon icon={faLinkedin} className='linked-in' /> 
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}