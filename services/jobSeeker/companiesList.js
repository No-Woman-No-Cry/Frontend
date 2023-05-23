import { API_URL } from '../config';

export async function GetCompanies(token, profile_id) {
  try {
    const response = await API_URL.get(`profile/basic/${profile_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
