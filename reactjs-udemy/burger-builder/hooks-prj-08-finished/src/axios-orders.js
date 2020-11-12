import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://baby-names-app-db-5b7e8.firebaseio.com'
});

export default instance;