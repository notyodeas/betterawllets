import axios from 'axios';
export const ahanotaxios = axios.create({
    baseURL: 'http://localhost:8082'
})