import React, { Component } from 'react'
import BarberApiService from '../../services/barber-api-service'
import { TimeButtons, ServiceButtons } from '../Utilitys/Utils'
export default class BarberProfile extends Component {
    state = {
        barberInfo: [],
        hasError: false
    }
    static defaultProps = {
        match: { params: {} }
    }
    componentDidMount() {
        const { barberid } = this.props.match.params
        BarberApiService.getBarber(barberid)
            .then(data => {
                return this.setState({ barberInfo: data })
            })
        }
    render() {
        const { first_name } = this.state.barberInfo
        return (
            <div>
                <h1>{first_name}</h1>
                <h3>Choose your Service</h3>
                <form className='service-list'>
                <ServiceButtons/>
                </form>
                <h3>Pick Time</h3>
                <TimeButtons />
                <button type='submit'>Review/Book</button>
            </div>
        )
    }
}
