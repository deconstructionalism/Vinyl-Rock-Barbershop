import React, { Component } from 'react'
import {Route , Switch} from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import LoginPage from '../../Pages/LoginPage'
import './App.css';

export default class App extends Component {

  
  render() {
    return (
      <div>
        <header>
          <NavBar/>
        </header>
        <main role='main' className='vinyl-main'>
        <Switch>
          <Route exact path='/Login' component={LoginPage}/>
        </Switch>
        
        </main>
        
      </div>
    )
  }
}



