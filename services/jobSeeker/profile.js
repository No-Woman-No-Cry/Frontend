import { instance } from '../config';

export async function GetProfile(profile_id) {
  try {
    const response = await instance.get(`profile/basic/${profile_id}`);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function UpdateProfile(profile_id, data) {
  try {
    const response = await instance.put(`profile/basic/${profile_id}`, data);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function GetEducation(profile_id) {
  try {
    const response = await instance.get(`profile/education/${profile_id}`);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function CreateEducation(profile_id, data) {
  try {
    const response = await instance.post(
      `profile/education/${profile_id}`,
      data
    );

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function UpdateEducation(profile_id, data) {
  try {
    const response = await instance.put(
      `profile/education/${profile_id}`,
      data
    );

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function DeleteEducation(profile_id, data) {
  try {
    const response = await instance.delete(
      `profile/education/${profile_id}`,
      data
    );

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
