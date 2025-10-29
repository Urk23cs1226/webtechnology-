import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001/api',
});

// Automatically attach token from localStorage
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('ecocycle_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
