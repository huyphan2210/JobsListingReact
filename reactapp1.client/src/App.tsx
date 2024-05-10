import { useEffect, useState } from "react";
import { Job } from "./swagger/api";
import JobAPI from "./api/job-api";
import JobInfo from "./components/Job/JobInfo";
import "./App.scss";

const jobAPI = new JobAPI();

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    jobAPI
      .getJobs()
      .then((data) => setJobs(data))
      .catch((error) => {
        if (error instanceof Error) {
          alert(error.message);
        } else {
          alert("Something's wrong");
        }
      });
  }, []);
  return (
    <>
      <header />
      <section className="filter"></section>
      <main>
        <section className="jobs-list">
          {jobs.map((job, index) => (
            <JobInfo key={index} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
