import React, { Component } from 'react';
import './App.css'

import HomePage from './HomePage/HomePage'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

export default class App extends Component {
  render(){

  return (
    <div className='App'>
      <nav className='nav-container'>
        <NavBar />
      </nav>
      <main className='main-container'>
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

