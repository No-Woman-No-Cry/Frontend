import { API_URL } from '../config';

export async function GetNotification(token, profile_id) {
  try {
    const response = await API_URL.get(`notification/${profile_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
