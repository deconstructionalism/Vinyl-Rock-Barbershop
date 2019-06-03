import React, { Component } from 'react'

import BarberApiService from '../../services/barber-api-service';

export class ServiceButtons extends Component {
    state = {
        barberServices: []
    }
    componentDidMount() {
        BarberApiService.getBarberServices()
            .then(services => {
                console.log(services)
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
                <form>
                    <button>
                        <p>7:00 a.m</p>
                    </button>
                    <button>
                        <p>8:00 a.m</p>
                    </button>
                    <button>
                        <p>9:00 a.m</p>
                    </button>
                    <button>
                        <p>10:00 a.m</p>
                    </button>
                    <button>
                        <p>11:00 a.m</p>
                    </button>
                    <button>
                        <p>1:00 p.m</p>
                    </button>
                    <button>
                        <p>2:00 p.m</p>
                    </button>
                    <button>
                        <p>3:00 p.m</p>
                    </button>
                    <button>
                        <p>4:00 p.m</p>
                    </button>
                    <button>
                        <p>5:00 p.m</p>
                    </button>
                    <button>
                        <p>6:00 p.m</p>
                    </button>
                    <button>
                        <p>7:00 p.m</p>
                    </button>
                </form>
            </div>
        )
    }
}
