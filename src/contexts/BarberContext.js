import React, { Component } from 'react'
import Barber from '../Components/Barber/Barber';

export const nullBarber = {
    barbers: {}
}
const BarberContext = React.createContext({
    barber:nullBarber,
    error:null,
    serError: () => {},
    clearError:() => {},
    setBarber: () => {},
})

export default BarberContext 
export class BarberProvider extends Component {
    state = {
        barber: nullBarber,
        error:null
    };

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setBarber = barber => {
        this.setState({barber})
    }
    render() {
        const {barber,
               error, 
               setError,
               clearError, 
               setBarber} = this.state
        const value = {
            barber,
            error,
            setError,
            clearError,
            setBarber
        }
        return (
            <div>
                <BarberContext.Provider value={value}>
                  {this.props.children}
                </BarberContext.Provider>
            </div>
        )
    }
}
