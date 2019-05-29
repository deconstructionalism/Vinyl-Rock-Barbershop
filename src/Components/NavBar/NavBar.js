import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class NavBar extends Component {
    render() {
        return (
            <nav className='NavBar'>
            <div className='left-nav'>
                <Link to="/">Vinyl Rock</Link>
            </div>
            <div className='right-nav'>
                <Link to="/">Home</Link>
                <Link to="/Service">Services</Link>
                <Link to="/Barbers">Barbers</Link>
                <Link to="/Login">Login</Link>
                <Link to="/">Logout</Link>
            </div>
            </nav>
        )
    }
}
