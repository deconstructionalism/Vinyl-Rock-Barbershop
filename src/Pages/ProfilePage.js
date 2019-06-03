import React, { Component } from 'react'
import { TimeButtons } from '../Components/Utilitys/Utils'

export default class ProfilePage extends Component {
    render() {
        return (
            <div>
                <h1>My Profile</h1>
                <h3>appointments</h3>
                <table>
                    <tr>
                        <th>Time</th>
                        <th>Barber</th>
                        <th>Service</th>
                    </tr>
                    <tr>
                        <td>9:00 a.m</td>
                        <td>Shawn</td>
                        <td>HAIRCUT</td>
                        <td><button>Cancel</button></td>
                    </tr>
                </table>
            </div>
        )
    }
}
