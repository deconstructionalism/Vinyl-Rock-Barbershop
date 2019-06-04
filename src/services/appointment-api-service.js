import config from '../config'
import TokenService from './token-service'

const AppointmentApiService = {
    getAllAppointments() {
        return fetch(`${config.API_ENDPOINT}/appointment`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getAppointment(AppointmentId) {
        return fetch(`${config.API_ENDPOINT}/appointment/${AppointmentId}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
     postAppointment(appointment) {
        return fetch(`${config.API_ENDPOINT}/appointment`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(appointment)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}
export default AppointmentApiService;