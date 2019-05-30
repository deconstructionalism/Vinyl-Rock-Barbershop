import React, { Component } from 'react'
import Barber from '../Barber/Barber'

export default class BarberList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <Barber/>
                </ul>
            </div>
        )
    }
}
