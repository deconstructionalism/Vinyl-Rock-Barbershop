import React, { Component } from 'react'

const BarberListContext = React.createContext({
    barberList: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setBarberList: () => { }
})
export default BarberListContext
export class BarberListProvider extends Component {
    state = {
        barberList: [],
        error: null,
    }
    setBarberList = barberList => {
        this.setState({ barberList })
    }
    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const { barberList,
                error,
               } = this.state
        
        const value = {
            barberList,
            error,
            setBarberList:this.setBarberList,
            setError:this.setError,
            clearError:this.clearError
        }
        return (
            <BarberListContext.Provider value={value}>
               {this.props.children}
            </BarberListContext.Provider>
        )
    }
}
