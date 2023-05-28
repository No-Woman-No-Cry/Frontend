import { instance } from '../config';

export async function GetNotification(employer_id) {
  try {
    const response = await instance.get(
      `/employer/notification/${employer_id}`
    );

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
