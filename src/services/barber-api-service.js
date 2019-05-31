import config from '../config'
import TokenService from './token-service'

const BarberApiService = {
    getAllBarbers(){
        return fetch(`${config.API_ENDPOINT}/barbers`,{
            headers:{     
            },
        })
            .then(res => 
                (!res.ok) 
                  ? res.json().then(e => Promise.reject(e))
                  :res.json()
            )
    },
    getBarber(barberId){
        return fetch(`${config.API_ENDPOINT}/barbers/${barberId}`,{
            headers:{
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
        .then(res=> 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default BarberApiService