import axios, { AxiosInstance } from "axios";
import { JobsListingService, serviceOptions } from "../swagger/api";

export default class JobAPI {
  axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.PROD
      ? "https://jobs-list-api-88ce443b6335.herokuapp.com/"
      : "",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  constructor() {
    serviceOptions.axios = this.axiosInstance;
  }

  getJobs() {
    return JobsListingService.getJobs();
  }

  getJobsWithFilter(jobTags: string[]) {
    return JobsListingService.getJobsWithFilter({ body: jobTags });
  }
}
