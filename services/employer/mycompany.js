import { instance } from '../config';

export async function GetBasicInfo(companyId) {
  try {
    const response = await instance.get(
      `/employer/my-company/basic/${companyId}`
    );

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
export async function UpdateBasicInfo(companyId, data) {
  try {
    const response = await instance.put(
      `/employer/my-company/basic/${companyId}`,
      data
    );

    return response;
  } catch (error) {
    console.log({ message: error.response });
  }
}
export async function PostBenefits(companyId, data) {
  try {
    const response = await instance.post(
      `/employer/my-company/benefit/${companyId}`,
      data
    );

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
export async function PostIndustries(companyId, data) {
  try {
    const response = await instance.post(
      `/employer/my-company/industry/${companyId}`,
      data
    );

    return response;
  } catch (error) {
    console.log({ message: error });
  }
}
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
