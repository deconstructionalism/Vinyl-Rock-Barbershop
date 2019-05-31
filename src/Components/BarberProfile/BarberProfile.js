import React, { Component } from 'react'

export default class BarberProfile extends Component {
    render() {
        return (
            <div>
                <h1>Shawn</h1>
                <h3>Chose your Service</h3>
                <form className='service-list'>
                    <button value='hairCut'>
                        <h3>HAIRCUT</h3>
                        <p>$20 45min</p>
                    </button>
                    <button value='razorCut'>
                        <h3>RAZORCUT</h3>
                        <p>$25 45min</p>
                    </button>
                    <button value='buzzCut'>
                        <h3>BUZZCUT</h3>
                        <p>$15 45min</p>
                    </button>
                       
                     
                </form>
            </div>
        )
    }
}
