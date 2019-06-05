import React, { Component } from 'react'
import BarberApiService from '../../Services/barber-api-service';

export class ServiceButtons extends Component {
    state = {
        barberServices: [],
    }
    componentDidMount() {
        BarberApiService.getBarberServices()
            .then(services => {
                return this.setState({ barberServices: services })

            })
    }
    handleSelectServiceType = (e, selected) => {
        e.preventDefault()
        this.props.serviceId(selected.id)
    }

    renderServices() {
        return this.state.barberServices.map(barber => {
            return <button
                onClick={(e) => this.handleSelectServiceType(e, barber)}
                key={barber.id} >
                <h3>{barber.type}</h3>
                <p>{barber.cost} 45min</p>
            </button>
        })
    }

    render() {
        return (
            <div>
                {this.renderServices()}
            </div>
        )
    }
}


export class TimeButtons extends Component {

    handleSelectTime = (e, selected) => {
        e.preventDefault()
        this.props.timeId(selected)
    }
    renderTimeButtons() {
        let timesArray = ['7:00 a.m',
            '8:00 a.m',
            '9:00 a.m',
            '10:00 a.m',
            '11:00 a.m',
            '12:00 p.m',
            '1:00 p.m',
            '2:00 p.m',
            '3:00 p.m',
            '4:00 p.m',
            '5:00 p.m',
            '6:00 p.m',
            '7:00 p.m']

        return timesArray.map((time, key) => {
            let idNumber;
            for (let i = 1; i <= 12; i++) {
                i += idNumber
            }
            return <button onClick={(e) => this.handleSelectTime(e, time)}
                id={idNumber}
                key={key}>
                <p>{time}</p>
            </button>
        })
    }
    render() {
        return (
            <div>
                {this.renderTimeButtons()}
            </div>
        )
    }
}
