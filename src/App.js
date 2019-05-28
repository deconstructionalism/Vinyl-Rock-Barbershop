import React, { Component } from 'react'
import './App.css';


import LandingPage from './Pages/LandingPage';
import ServicePage from './Pages/ServicePage';
import LoginPage from './Pages/LoginPage';
import BarberPage from './Pages/BarberPage';
import Register from './Pages/Register';
import AppointmentPage from './Pages/AppointmentPage';


export default class App extends Component {
  render() {
    return (
      <div>
        <LandingPage/>
        <ServicePage/>
        <LoginPage/>
        <BarberPage/>
        <Register/>
        <AppointmentPage/>
        
      </div>
    )
  }
}



