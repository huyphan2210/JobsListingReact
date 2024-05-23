import { createContext, useContext } from "react";
import { action, makeAutoObservable, observable } from "mobx";
import { Job } from "./swagger/api";
import JobAPI from "./api/job-api";

export default class JobStore {
  constructor() {
    makeAutoObservable(this, {
      jobs: observable,
      filter: observable,
      isLoading: observable,
      getJobs: action,
      getJobsWithFilter: action,
      addTagToFilter: action,
      removeTagFromFilter: action,
      resetFilter: action,
    });
  }

  jobs: Job[] = [];

  filter: string[] = [];

  jobApi = new JobAPI();

  isLoading = false;

  getJobs() {
    this.isLoading = true;
    this.jobApi
      .getJobs()
      .then((jobs) => {
        this.jobs = jobs;
      })
      .finally(() => (this.isLoading = false));
  }

  getJobsWithFilter() {
    this.isLoading = true;
    this.jobApi
      .getJobsWithFilter(this.filter)
      .then((jobs) => {
        this.jobs = jobs;
      })
      .finally(() => (this.isLoading = false));
  }

  addTagToFilter(tag: string) {
    if (this.filter.indexOf(tag) > -1) {
      return;
    }

    this.filter = [...this.filter, tag];
    this.getJobsWithFilter();
  }

  removeTagFromFilter(tag: string) {
    const index = this.filter.indexOf(tag);
    if (index > -1) {
      this.filter = this.filter.filter((filterTag) => filterTag !== tag);
    }
    this.getJobsWithFilter();
  }

  resetFilter() {
    this.filter = [];
    this.getJobs();
  }
}

export const JobStoreContext = createContext<JobStore | null>(null);

export const useJobStore = () => {
  const store = useContext(JobStoreContext);
  if (!store) {
    throw new Error("useJobStore must be used within an JobStoreProvider");
  }
  return store;
};
