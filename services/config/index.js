import axios from 'axios';

// Set up Axios instance
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL,
});

// Add interceptor to automatically add authorization header
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { instance };
