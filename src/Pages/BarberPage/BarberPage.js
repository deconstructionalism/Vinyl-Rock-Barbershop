import React, { Component } from 'react'

import BarberList from '../../Components/BarberList/BarberList'
export default class BarberPage extends Component {

render() {
    return (
        <div>
            <h1>Pick Your Pro</h1>
            <p> Only next day appointments</p>
            <BarberList />
        </div>
    )
}
}
