import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import BarberPage from '../../Pages/BarberPage'
import BarberProfile from '../BarberProfile/BarberProfile'
import HomePage from '../../Pages/HomePage'
import LoginPage from '../../Pages/LoginPage'
import NavBar from '../NavBar/NavBar'
import ProfilePage from '../../Pages/ProfilePage';
import RegisterPage from '../../Pages/RegisterPage'
import ServiceManuPage from '../../Pages/ServiceManuPage'
import './App.css';

export default class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <main role='main' className='vinyl-main'>
          {this.state.hasError && <p className='red'>There was an error!</p>}
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/Barbers' component={BarberPage} />
            <Route exact path='/BarbersProfile/:barberid' component={BarberProfile}/>
            <Route exact path='/Login' component={LoginPage} />
            <Route exact path='/Profile' component={ProfilePage}/>
            <Route exact path='/Register' component={RegisterPage} />
            <Route exact path='/Service' component={ServiceManuPage} />
          </Switch>

        </main>

      </div>
    )
  }
}



