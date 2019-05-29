import React, { Component } from 'react'

export default class LoginForm extends Component {

    handleSubmitToApi = e =>{
        e.preventDefault()
        const {user_name,password} = e.target

        let loginInfo = {
            user_name: user_name.value,
            password: password.value
        }
        return fetch('http://localhost:8000/user',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        
    }
    render() {
        return (
            <div>
                <form
                  className='LoginForm'
                  onSubmit={this.handleSubmitToApi}
                >
                    <label className='userName'>User Name</label>
                    <input type='text' placeholder='Cody_Gill...' name='user_name' />

                    <label className='Password'>Password</label>
                    <input type='text' name='password' />

                    {/* <p>Forgot Password ?<button>Click here</button></p> */}
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}
