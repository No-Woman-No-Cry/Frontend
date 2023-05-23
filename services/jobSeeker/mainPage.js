import { API_URL } from '../config';

export async function GetAllJobs(
  token,
  page = '',
  limit = '',
  jobType = '',
  workPlace = '',
  categoryId = '',
  searchJob = ''
) {
  try {
    const response = await API_URL.post(
      `main/jobs?page=${page}&limit=${limit}&jobType=${jobType}&workPlace=${workPlace}&categoryId=${categoryId}&searchJob=${searchJob}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function GetCategories(token) {
  try {
    const response = await API_URL.get(`main/categories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
