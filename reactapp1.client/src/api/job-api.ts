import axios, { AxiosInstance } from "axios";
import { JobsListingService, serviceOptions } from "../swagger/api";

export default class JobAPI {
  axiosInstance: AxiosInstance = axios.create({
    baseURL: "https://localhost:5173",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  constructor() {
    serviceOptions.axios = this.axiosInstance;
  }

  getJobs() {
    // Now you should be able to call the static method getWeatherForecast
    return JobsListingService.getJobs();
  }
}