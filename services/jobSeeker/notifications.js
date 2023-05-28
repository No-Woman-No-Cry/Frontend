import { instance } from '../config';

export async function GetNotification(user_id) {
  try {
    const response = await instance.get(`notification/${user_id}`);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
