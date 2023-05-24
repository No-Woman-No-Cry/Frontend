import { instance } from '../config';

export async function GetAllJobs(
  page = '',
  limit = '',
  jobType = '',
  workPlace = '',
  categoryId = '',
  searchJob = ''
) {
  try {
    const response = await instance.post(
      `main/jobs?page=${page}&limit=${limit}&jobType=${jobType}&workPlace=${workPlace}&categoryId=${categoryId}&searchJob=${searchJob}`
    );

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}

export async function GetCategories() {
  try {
    const response = await instance.get(`main/categories`);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
