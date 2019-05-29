import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'


export default class LoginForm extends Component {

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = e.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }
    render() {
        return (
            <div>
                <form
                    className='LoginForm'
                    onSubmit={this.handleSubmitJwtAuth}
                >
                    <label className='userName'>User Name</label>
                    <input type='text' placeholder='Cody_Gill...' name='user_name' />

                    <label className='Password'>Password</label>
                    <input type='text' name='password' />

                    {/* <p>Forgot Password ?<button>Click here</button></p> */}
                    <button type='submit'>Login</button>
                    <Link to='/Register'> Register </Link>
                </form>
            </div>
        )
    }
}
