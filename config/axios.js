import axios from 'axios'

const client = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/'
})

export default client;