import React, { Component } from 'react'

export default class LoginPage extends Component {
    render() {
        return (
            <div className='login'>
                <form>
                    <label className='userName'>User Name</label>
                    <input type='text' placeholder='Cody_Gill...' className='userName'/>
                    <label className='Password'>Password</label>
                    <input type='text' className='userName'/>
                    <p>Forgot Password ?<button>Click here</button></p>
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}
