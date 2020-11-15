import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export const createProduct = (requestBody) => api.post('product/create', requestBody);


export const getProduct = (id) => api.get('product/:id', id);

export const listProducts = () => api.get('/');


export default api;