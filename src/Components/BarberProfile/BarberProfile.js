import React, { Component } from 'react'
import BarberApiService from '../../Services/barber-api-service'
import AppointmentApiService from '../../Services/appointment-api-service'
import { TimeButtons, ServiceButtons } from '../Utilitys/Utils'
export default class BarberProfile extends Component {
    state = {
        barberInfo: [],
        newAppointment: [],
        serviceSelected: '',
        timeSelected: '',
        hasError: false
    }
    static defaultProps = {
        match: { params: {} }
    }
    componentDidMount() {
        const { barberid } = this.props.match.params
        const { newAppointment } = this.state.newAppointment
        BarberApiService.getBarber(barberid)
            .then(data => {
                return this.setState({ barberInfo: data })
            })
    }


    handleServiceType = ev => {
        return this.setState({ serviceSelected: ev })
    }
    handleSelectTime = ev => {
        return this.setState({ timeSelected: ev })
    }
    
    handlePostOfSelectedServices = ev => {
        ev.preventDefault();

         this.setState({
            newAppointment: [
                this.state.serviceSelected,
                this.state.timeSelected]
        })
        console.log(this.state.newAppointment)
    }
    render() {
        const { first_name } = this.state.barberInfo
        return (
            <div>
                <h1>{first_name}</h1>
                <form className='service-time-list'
                    onSubmit={this.handlePostOfSelectedServices}
                ><div className='service-list'>
                        <h3>Choose your Service</h3>
                        <ServiceButtons serviceId={this.handleServiceType} />
                    </div>
                    <div className='time-list'>
                        <h3>Pick Time</h3>
                        <TimeButtons timeId={this.handleSelectTime} />
                    </div>
                    <button type='submit'>Review/Book</button>
                </form>
            </div>
        )
    }
}
