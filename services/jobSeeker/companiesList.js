import { instance } from '../config';

export async function GetCompanies(profile_id) {
  try {
    const response = await instance.get(`profile/basic/${profile_id}`);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
