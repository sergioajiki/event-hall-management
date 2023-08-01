import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestData = async (endpoint: string) => {
  const response = await api.get(endpoint);
  // console.log('aqui do resquest a data', response.data);
  return response.data;
};

export const postData = async (endpoint, body) => {
  const response = await api.post(endpoint,body);
  // console.log('aqui do resquest a data', response.data);
  return response.data;
} 

