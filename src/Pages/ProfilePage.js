import React, { Component } from 'react'
import AppointmentApiService from '../Services/appointment-api-service'


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
        return appointmentList.map((appointment , key) => {
            const { time, first_name, type } = appointment
            return <tr key={key} >
                    <td>{time}</td>
                    <td>{first_name}</td>
                    <td>{type}</td>
                    <td><button>Cancel</button></td>
                </tr>
        })

    }

    render() {
        return (
            <div>
                <h1>My Profile</h1>
                <h3>appointments</h3>
                <table>
                    <tbody>
                    <tr>
                        <th>Time</th>
                        <th>Barber</th>
                        <th>Service</th>
                    </tr>
                    {this.renderProfile()}
                    </tbody>
                </table>
            </div>
        )
    }
}
