import { instance } from '../config';

export async function GetNotification(profile_id) {
  try {
    const response = await instance.get(`notification/${profile_id}`);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
