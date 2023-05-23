import { API_URL } from "../config";

export async function GetHistory(token, profile_id) {
    try {
      const response = await API_URL.get(`history/${profile_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      return response;
    } catch (error) {
      console.log({ message: error.message });
    }
  }
  