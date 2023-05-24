import { instance } from '../config';

export async function Login(data) {
  try {
    const response = await instance.post(`auth/login`, data);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function Registration(data) {
  try {
    const response = await instance.post(`auth/register`, data);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
