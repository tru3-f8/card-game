import React, { useState } from 'react';
import Card from './Components/Card';
import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/card'>
            <Card />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
