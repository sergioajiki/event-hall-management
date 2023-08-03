import axios from 'axios';

export type BodyEvent = {
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventType: string;
  description: string;
}

export type BodyLogin = {
  email: string;
  password: string;
}

export type BodyEmail = {
  email: string
}


const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestData = async (endpoint: string) => {
  const response = await api.get(endpoint);
  // console.log('aqui do resquest a data', response.data);
  return response.data;
};

export const postData = async (endpoint: string, body: BodyEmail | BodyEvent | BodyLogin) => {
  const response = await api.post(endpoint,body);
  // console.log('aqui do resquest a data', response.data);
  return response.data;
} 

export const updateData = async (endpoint: string, body: string | BodyEvent) => {
  const response = await api.patch(endpoint,body);
  // console.log('aqui do resquest a data', response.data);
  return response.data;
} 

