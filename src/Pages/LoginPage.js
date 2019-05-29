import React, { Component } from 'react'
import LoginForm from '../Components/LoginForm/LoginForm'

export default class LoginPage extends Component {
    render() {
        return (
            <div className='loginPage'>
            <h2>Login</h2>
            <LoginForm/>
            </div>
        )
    }
}
