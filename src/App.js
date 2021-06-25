import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

export default class App extends Component {
  render(){

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <HomePage />
        <AboutMe />
        <Portfolio />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
}

