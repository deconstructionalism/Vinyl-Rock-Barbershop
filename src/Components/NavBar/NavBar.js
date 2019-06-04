import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TokenService from '../../Services/token-service'
export default class NavBar extends Component {
    handleLogout = () => {
        TokenService.clearAuthToken();
    }
    render() {
        return (
            <nav className='NavBar'>
            <div className='left-nav'>
                <Link to="/">Vinyl Rock</Link>
            </div>
            <div className='right-nav'>
                <Link to="/">
                  Home
                </Link>
                <Link to="/Service">
                  Services
                </Link>
                <Link to="/Barbers">
                  Barbers
                </Link>
                <Link to='/Profile'>
                  Profile
                </Link>
                <Link to="/Login">
                  Login
                </Link>
                <Link 
                  onClick= {this.handleLogout}
                  to="/">
                  Logout
                </Link>
            </div>
            </nav>
        )
    }
}
