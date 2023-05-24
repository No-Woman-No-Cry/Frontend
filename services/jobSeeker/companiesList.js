import { instance } from '../config';

export async function GetCompanies() {
  try {
    const response = await instance.get(`companies`);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
