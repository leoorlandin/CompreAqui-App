import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export const getProducts = async (filter = null) => {
  let params = null;

  if (filter) {
    params = { filter };
  }

  return await api.get('/', { params })
}

export const createProduct = (requestBody) => api.post('product/create', requestBody);

export const getProduct = (id) => api.get(`product/${id}`);

export const updateProduct = (id, requestBody) => api.put(`product/${id}/edit`, requestBody);

export const deleteProduct = (id) => api.delete(`product/${id}/edit`);

export default api;