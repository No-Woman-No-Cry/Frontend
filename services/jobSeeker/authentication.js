import { API_URL } from '../config';

export async function Login(data) {
  try {
    const response = await API_URL.post(`auth/login`, data);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function Registration(data) {
  try {
    const response = await API_URL.post(`auth/register`, data);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
