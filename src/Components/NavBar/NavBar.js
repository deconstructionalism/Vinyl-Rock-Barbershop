import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TokenService from '../../Services/token-service'
import './NavBar.css'
export default class NavBar extends Component {
  handleLogout = () => {
    TokenService.clearAuthToken();
  }
  render() {
    return (
      <nav className='NavBar'>
        <ul>
          <div className='left-nav'>
            <li><Link to="/">Vinyl Rock</Link></li>
          </div>
          <div className='right-nav'>
            <li><Link to="/">
              Home
                </Link></li>
            <li><Link to="/Service">
              Services
                </Link></li>
            <li><Link to="/Barbers">
              Barbers
                </Link></li>
            <li><Link to='/Profile'>
              Profile
                </Link></li>
            <li><Link to="/Login">
              Login
                </Link></li>
            <li><Link
              onClick={this.handleLogout}
              to="/">
              Logout
                </Link></li>
          </div>
        </ul>
      </nav>
    )
  }
}
