import React, { Component } from 'react'
import AppointmentApiService from '../Services/appointment-api-service'
import { TimeButtons } from '../Components/Utilitys/Utils'

export default class ProfilePage extends Component {
    static defaultProps = {
        match: { params: {} }
    }
    state = {
        appointmentList: []
    }

    componentDidMount() {
        // const { profileId } = this.props.match.params;
        AppointmentApiService.getAllAppointments()
            .then(appointment =>
                this.setState({
                    appointmentList: appointment
                }))
    }

    renderProfile() {
        const { appointmentList } = this.state
        return appointmentList.map( appointment => {
            const { time, barber_id, services_id } = appointment
            return <tr>
                <td>{time}</td>
                <td>{barber_id}</td>
                <td>{services_id}</td>
                <td><button>Cancel</button></td>
            </tr>
        })

    }

    render() {
        const { time, barber, services_id } = this.state.appointmentList
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
                   {this.renderProfile()}
                </table>
            </div>
        )
    }
}
