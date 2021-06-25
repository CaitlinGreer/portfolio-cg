import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h3>Reach Out</h3>

                <div className='form-container'>
                    <div className='form'>
                        <form action="https://formspree.io/f/mpzojzpp" method="post">
                            <fieldset>
                                <legend>Send Me An Email</legend>
                                <label htmlFor='user-name'>Name:</label>
                                <input
                                    type='text'
                                    id='user-name'
                                    name='user-name'
                                    className='user-name'
                                    placeholder='Name'
                                />
                                <label htmlFor='email'>Email:</label>
                                <input
                                    type='text'
                                    id='email'
                                    name='email'
                                    className='email'
                                    placeholder='Email'
                                />
                                <label htmlFor='form-message'>Your Message:</label>
                                <textarea
                                    type='text'
                                    id='email'
                                    name='email'
                                    className='email'
                                    placeholder='Email'
                                />    
                                <button type="submit">Submit</button>                            
                            </fieldset>
                        </form>
                    </div>
                </div>

                <div className='contact-links-container'>
                    <h3>Or find me at any of the following:</h3>  
                    <p>links to github linked in here</p>

                </div>
            </div>
        )
    }
}