import axios from 'axios'

const api = axios.create({
    baseURL: 'https://6a138aab6c7db8aac0531ef8.mockapi.io'
})

export default api