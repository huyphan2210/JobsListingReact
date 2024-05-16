import { useEffect } from "react";
import JobInfo from "./components/Job/JobInfo";
import "./App.scss";
import { observer } from "mobx-react";
import { useJobStore } from "./JobStore";
import JobTag from "./components/Job/JobTag/JobTag";

function App() {
  const jobStore = useJobStore();
  useEffect(() => {
    jobStore.getJobs();
  }, []);
  
  return (
    <>
      <header />
      <section className="filter">
        {jobStore.filter.map((tag, index) => (
          <JobTag key={index} tagContent={tag} />
        ))}
      </section>
      <main>
        <section className="jobs-list">
          {jobStore.jobs.map((job, index) => (
            <JobInfo key={index} job={job} />
          ))}
        </section>
      </main>
    </>
  );
}

const ObserverApp = observer(App);

export default ObserverApp;
