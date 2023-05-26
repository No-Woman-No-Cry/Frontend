import { instance } from '../config';

export async function GetMyJobs(company_id) {
  try {
    const response = await instance.get(`/employer/my-jobs/${company_id}`);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
export async function GetMyJobDetails(company_id, job_id) {
  try {
    const response = await instance.get(
      `/employer/my-jobs/${company_id}/${job_id}`
    );

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
export async function GetCategories() {
  try {
    const response = await instance.get(
      `/employer/my-jobs/post-job/categories`
    );

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
export async function GetSalaries() {
  try {
    const response = await instance.get(`/employer/my-jobs/post-job/salaries`);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
export async function GetSkills() {
  try {
    const response = await instance.get(`/employer/my-jobs/post-job/skills`);

    return response;
  } catch (error) {
    console.log({ message: error.message });
  }
}
export async function PostJob(data) {
  try {
    const response = await instance.post(`/employer/my-jobs/post-job`, data);

    return response;
  } catch (error) {
    console.log({ message: error });
  }
}
