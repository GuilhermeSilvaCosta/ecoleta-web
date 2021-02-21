import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecoleta-api-zfd6wyvr3q-uc.a.run.app'
});

export default api;