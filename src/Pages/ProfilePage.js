import React, { Component } from 'react'
import AppointmentApiService from '../Services/appointment-api-service'
import { TimeButtons } from '../Components/Utilitys/Utils'

export default class ProfilePage extends Component {
    state={
        appointmentlist: []
    }

    componentDidMount(){
        AppointmentApiService.getAllAppointments()
            .then(appointment => console.log(appointment))
                // this.setState({
                //     appointmentlist:appointment
                // }))
    }
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
