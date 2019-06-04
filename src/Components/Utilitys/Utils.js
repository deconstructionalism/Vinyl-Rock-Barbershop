import React, { Component } from 'react'
import AppointmentApiService from '../../Services/appointment-api-service'
import BarberApiService from '../../Services/barber-api-service';

export class ServiceButtons extends Component {
    state = {
        barberServices: []
    }
    componentDidMount() {
        BarberApiService.getBarberServices()
            .then(services => {
                return this.setState({ barberServices: services })

            })
    }

    renderServices() {
        return this.state.barberServices.map(barber => {
            return <button key={barber.id} >
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
    render() {
        return (
            <div>
                <button id='1'>
                    <p>7:00 a.m</p>
                </button>
                <button id='2'>
                    <p>8:00 a.m</p>
                </button>
                <button id='3'>
                    <p>9:00 a.m</p>
                </button>
                <button id='4'>
                    <p>10:00 a.m</p>
                </button>
                <button id='5'>
                    <p>11:00 a.m</p>
                </button>
                <button id='6'>
                    <p>1:00 p.m</p>
                </button>
                <button id='7'>
                    <p>2:00 p.m</p>
                </button>
                <button id='8'>
                    <p>3:00 p.m</p>
                </button>
                <button id='9'>
                    <p>4:00 p.m</p>
                </button>
                <button id='10'>
                    <p>5:00 p.m</p>
                </button>
                <button id='11'>
                    <p>6:00 p.m</p>
                </button>
                <button id='12'>
                    <p>7:00 p.m</p>
                </button>
            </div>
        )
    }
}
