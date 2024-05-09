import { useEffect, useState } from "react";
import { Job } from "./swagger/api";
import JobAPI from "./api/job-api";
import JobInfo from "./components/Job/JobInfo";

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
    <main>
      {jobs.map((job, index) => (
        <JobInfo key={index} />
      ))}
    </main>
  );
}

export default App;
