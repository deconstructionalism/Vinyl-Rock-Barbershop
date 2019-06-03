import React, { Component } from 'react'
import BarberApiService from '../../services/barber-api-service'
import { TimeButtons } from '../Utilitys/Utils'
export default class BarberProfile extends Component {
    state = {
        barberInfo: [],
         hasError: false 
    }
    static defaultProps = {
        match: {params: {}}
    }
    componentDidMount(){
        const {barberid} = this.props.match.params
        BarberApiService.getBarber(barberid)
            .then(data => {
                return this.setState({barberInfo:data})
            })
    }
    renderTitle(){
        return this.barberInfo.map(barber => 
            console.log(barber))


    }
    render() {
        const {first_name } = this.state.barberInfo
        return (
            <div>
                <h1>{first_name}</h1>
                <h3>Choose your Service</h3>
                <form className='service-list'>
                    <button value='hairCut'>
                        <h3>HAIRCUT</h3>
                        <p>$20 45min</p>
                    </button>
                    <button value='buzzCut'>
                        <h3>BUZZCUT</h3>
                        <p>$15 45min</p>
                    </button>
                    <button value='kids'>
                        <h3>KID 12 AND UNDER </h3>
                        <p>$10 45min</p>
                    </button>
                    <button value='seniors'>
                        <h3>SENIOR CUT 60+</h3>
                        <p>$10 60min</p>
                    </button>
                    <button value='designs'>
                        <h3>DESIGNS</h3>
                        <p>$5</p>
                    </button>
                    <button value='hairwash'>
                        <h3>HAIRWASH</h3>
                        <p>$5</p>
                    </button>
                    <button value='beardTrim'>
                        <h3>BEARD TRIM</h3>
                        <p>$10 15min</p>
                    </button>
                    <button value='beardTrimRazorFinish'>
                        <h3>BEARD TRIM (RAZOR FINISH)</h3>
                        <p>$15 25min</p>
                    </button>
                    <button value='beardTrim'>
                        <h3> HAIRCUT AND BEARD TRIM </h3>
                        <p>$30 60min</p>
                    </button>
                    <button value='luxuryShave'>
                        <h3>LUXURY SHAVE</h3>
                        <p>$30 45min</p>
                    </button>
                </form>
                <h3>Pick Time</h3>
                <TimeButtons/>
                <button type='submit'>Review/Book</button>
            </div>
        )
    }
}
