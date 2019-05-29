import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class RegisterForm extends Component {
    state= {error: null}
    render() {
        const {error} = this.state
        return (
            <div>
                <div>
                    <form
                        className='RegisterForm'
                        onSubmit={this.handleSubmitJwtAuth}
                    >
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <label className='First-Name'>
                            First Name
                        </label>
                        <input
                            type='text'
                            placeholder='First'
                            name='First_name'
                            required
                        />
                        <label className='Last-Name'>
                            Last Name
                        </label>
                        <input
                            type='text'
                            placeholder='Last'
                            name='Last_name'
                            required
                        />
                        <label className='userName'>
                            User Name
                        </label>
                        <input
                            type='text'
                            placeholder='First_Last...'
                            name='user_name'
                            required
                        />
                        <label className='Password'>
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            required
                        />
                        <label className='phone_number'>
                            Phone Number
                        </label>
                        <input
                            type='text'
                            placeholder='916-289-1234'
                            name='phone_number'
                        />
                        <label className='email'>
                            Email
                        </label>
                        <input
                            type='email'
                            placeholder='First@gmail.com'
                            name='email'
                        />
                        <button type='submit'>
                            Register
                        </button>
                    </form>
                </div>
                
            </div>
        )
    }
}
