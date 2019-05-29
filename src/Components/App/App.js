import React, { Component } from 'react'
import {Route , Switch} from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import HomePage from '../../Pages/HomePage'
import Register from '../../Pages/Register'
import LoginPage from '../../Pages/LoginPage'
import ServicePage from '../../Pages/ServicePage'
import BarberPage from '../../Pages/BarberPage'
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
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/Login' component={LoginPage}/>
          <Route exact path='/Register' component={Register}/>
          <Route exact path='/Barbers' component={BarberPage} />
          <Route exact path='/Service' component={ServicePage} />

        </Switch>
        
        </main>
        
      </div>
    )
  }
}



