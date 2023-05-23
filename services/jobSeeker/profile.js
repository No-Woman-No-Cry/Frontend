import { API_URL } from '../config';

export async function GetProfile(token, profile_id) {
  try {
    const response = await API_URL.get(`profile/basic/${profile_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}


export async function UpdateProfile(token, profile_id, data) {
  try {
    const response = await API_URL.put(`profile/basic/${profile_id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function GetEducation(token, profile_id) {
  try {
    const response = await API_URL.get(`profile/education/${profile_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function CreateEducation(token, profile_id, data) {
  try {
    const response = await API_URL.post(`profile/education/${profile_id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function UpdateEducation(token, profile_id, data) {
  try {
    const response = await API_URL.put(`profile/education/${profile_id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function DeleteEducation(token, profile_id, data) {
  try {
    const response = await API_URL.delete(`profile/education/${profile_id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

