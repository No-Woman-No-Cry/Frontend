import { instance } from '../config';

export async function GetBenefits() {
  try {
    const response = await instance.get(
      `/employer/my-company/benefit/benefits`
    );

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
export async function GetIndustry() {
  try {
    const response = await instance.get(
      `/employer/my-company/industry/industries`
    );

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
