import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { SideNavToggleButton } from '../Utilities/Utils'
import TokenService from '../../Services/token-service'
import './NavBar.css'

export default class NavBar extends Component {
  handleLogout = () => {
    TokenService.clearAuthToken();
  }
  render() {
    return (
      <nav className='NavBar'>
        <div className='logo'>
          <Link to="/">Vinyl Rock</Link>
        </div>
        <div className='spacer' />
        <div className='right-nav'>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Service">
                Services
              </Link>
            </li>
            <li>
              <Link to="/Barbers">
                Barbers
              </Link>
            </li>
            <li>
              <Link to='/Profile'>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/Login">
                Login
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleLogout}
                to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
          <div className='side-button'>
            <SideNavToggleButton />
          </div>
      </nav>
    )
  }
}
