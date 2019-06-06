import React, { Component } from 'react'
import { ServiceList } from '../../Components/Utilitys/Utils'

export default class ServiceManuPage extends Component {
    render() {
        return (
            <div>
                <h1> Service Manu </h1>
                <ServiceList/>
            </div>
        )
    }
}
