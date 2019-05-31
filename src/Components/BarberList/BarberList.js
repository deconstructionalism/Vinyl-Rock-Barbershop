import React, { Component } from 'react'
import Barber from '../Barber/Barber'
import barberApiService from '../../services/barber-api-service'

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
