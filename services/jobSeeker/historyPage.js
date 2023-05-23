import { instance } from '../config';

export async function GetHistory(profile_id) {
  try {
    const response = await instance.get(`history/${profile_id}`);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
