import { http } from './config'

export default {

    listar: () => {
        return http.get('users')
    },

    buscar: (search) => {
        return http.get(`users/${search}`)
    }
}
