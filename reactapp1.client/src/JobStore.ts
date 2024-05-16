import { createContext, useContext } from "react";
import { action, makeAutoObservable, observable } from "mobx";
import { Job } from "./swagger/api";
import JobAPI from "./api/job-api";

export default class JobStore {
  constructor() {
    makeAutoObservable(this, {
      filter: observable,
      getJobs: action,
      getJobsWithFilter: action,
      addTagToFilter: action,
      removeTagFromFilter: action,
    });
  }

  jobs: Job[] = [];

  filter: string[] = [];

  jobApi = new JobAPI();

  getJobs() {
    this.jobApi.getJobs().then((jobs) => {
      this.jobs = jobs;
    });
  }

  getJobsWithFilter() {
    this.jobApi.getJobs(this.filter).then((jobs) => {
      this.jobs = jobs;
    });
  }

  addTagToFilter(tag: string) {
    this.filter = [...this.filter, tag];
    this.getJobsWithFilter();
  }

  removeTagFromFilter(tag: string) {
    const index = this.filter.indexOf(tag);
    if (index > -1) {
      this.filter.slice(index, 1);
    }
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