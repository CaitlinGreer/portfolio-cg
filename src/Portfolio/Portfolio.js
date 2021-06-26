import React, { Component } from 'react'
import './Portfolio.css'

import cocktailHour from '../images/cocktailhour.png'
import magicalMeals from '../images/MMLandingPage.png'
import chuckles from '../images/chuckles.png'

export default class AboutMe extends Component {
    render() {
        return (
            <div id='portfolio' className='portfolio-container'>
                <h3 className='portfolio-heading'>PORTFOLIO</h3>
                <div className='portfolio-content'>
                    <div className='portfolio-item-1'>
                        <h3 className='app-heading'>Magical Meals</h3>
                        <img className="portfolio-image" src={magicalMeals} alt="magical meals home page" />
                        <span className="app-description">
                            <p>Magical Meals is a client-side React web app that allows users with dietary restrictions find meals based on park location at Walt Disney World.
                                It was built to use an API, which can be viewed in the link below.
                                <br /><br />
                                <span className='built-with'>
                                    TECH USED:
                                    <br></br>
                                    HTML5 | CSS | JavaScript | React | Node.js | Express | PostgreSQL | Knex.js | RESTful APIs</span>

                            </p>

                        </span>

                        <div className='links-section'><span className='check-it-out'>Check It Out Here</span>
                            <ul className='portfolio-links'>
                                <li><a href="https://magical-meals.vercel.app/">Live</a></li>
                                <li><a href="https://github.com/CaitlinGreer/magical-meals.git">GitHub Repo</a></li>
                                <li><a href="https://github.com/CaitlinGreer/magical-meals-api.git">API Repo</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='portfolio-item-2'>
                        <h3 className='app-heading'>Chuckles</h3>
                        <img className="portfolio-image" src={chuckles} alt="chuckles home page" />
                        <span className='app-description'>
                            <p>Chuckles is a client-side React web app created to bring a laugh to your day, that allows users to
                                see and share dad jokes.
                                It was built to use a back end server, which can be viewed in the link below.
                                <br /><br />
                                <span className='built-with'>
                                    TECH USED:
                                    <br></br>
                                    HTML5 | CSS | JavaScript | React | Node.js | Express | PostgreSQL | Knex.js | RESTful APIs</span>
                            </p>

                        </span>

                        <div className='links-section'><span className='check-it-out'>Check It Out Here</span>
                            <ul className='portfolio-links'>
                                <li><a href="https://chuckles-app.vercel.app/">Live</a></li>
                                <li><a href="https://github.com/CaitlinGreer/chuckles-app.git">GitHub Repo</a></li>
                                <li><a href="https://github.com/CaitlinGreer/chuckles-api.git">API Repo</a></li>
                            </ul>

                        </div>

                    </div>

                    <div className='portfolio-item-3'>
                        <h3 className='app-heading'>Cocktail Hour</h3>
                        <img className="portfolio-image" src={cocktailHour} alt="cocktail hour home page" />
                        <span className='app-description'>
                            <p>An app created using JavaScript that makes API calls to The Cocktail DB API.
                                The user can find a drink recipe by searching by ingredient, or walk on the wild side and choose a drink at random.
                                <br /><br />
                                <span className='built-with'>
                                    TECH USED:
                                    <br></br>
                                    HTML5 | CSS | JavaScript | jQuery | RESTful APIs
                                </span>
                            </p>
                        </span>
                        <div className='links-section'><span className='check-it-out'>Check It Out Here</span>
                            <ul className='portfolio-links'>
                                <li><a href="https://caitlingreer.github.io/CocktailHour/">Live</a></li>
                                <li><a href="https://github.com/CaitlinGreer/CocktailHour.git">GitHub Repo</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}