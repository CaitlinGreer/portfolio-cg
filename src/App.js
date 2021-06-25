import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './HomePage/HomePage'

export default class App extends Component {
  render(){

  return (
    <div>
      <main>
        <Switch>
          <Route 
            exact 
            path='/'
            component={HomePage}
          />
          <Route
            path='/about-me'
            component={AboutMe}
          />
                    <Route
            path='/portfolio'
            component={Portfolio}
          />
                    <Route
            path='/contact'
            component={Contact}
          />

        </Switch>
      </main>
    </div>
  );
}
}
export default App;
