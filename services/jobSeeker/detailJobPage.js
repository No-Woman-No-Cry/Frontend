import { instance } from '../config';

export async function GetDetail(id) {
  try {
    const response = await instance.get(`jobs/${id}`);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function ApplyTheJob(id, data) {
  try {
    const response = await instance.post(`jobs/${id}`, data);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
