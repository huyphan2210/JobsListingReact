import axios, { AxiosInstance } from "axios";
import { JobsListingService, serviceOptions } from "../swagger/api";

export default class JobAPI {
  axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.PROD ? import.meta.env.VITE_APP_API_URL : "",
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
