import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class RegisterForm extends Component {
    state= {error: null}

    handleNewUserSubmit = e =>{
        e.preventDefault()


    }
    render() {
        const {error} = this.state
        return (
            <div>
                <div>
                    <form
                        className='RegisterForm'
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
                            
                        />
                        <label className='Last-Name'>
                            Last Name
                        </label>
                        <input
                            type='text'
                            placeholder='Last'
                            name='Last_name'
                            
                        />
                        <label className='userName'>
                            User Name
                        </label>
                        <input
                            type='text'
                            placeholder='First_Last...'
                            name='user_name'
                            
                        />
                        <label className='Password'>
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            
                        />
                        <label className='phone_number'>
                            Phone Number
                        </label>
                        <input
                            type='tel'
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder='XXX-XXX-XXXX'
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
