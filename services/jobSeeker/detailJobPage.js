import { API_URL } from '../config';

export async function GetDetail(token, id) {
  try {
    const response = await API_URL.get(`jobs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function ApplyTheJob(token, id, data) {
  try {
    const response = await API_URL.post(`jobs/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
