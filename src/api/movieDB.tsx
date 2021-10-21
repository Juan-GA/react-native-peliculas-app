import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '7db9a8a3750f4adbd3acd72a6f93ce4e',
        language: 'es-ES'
    }
});

export default movieDB;