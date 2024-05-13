import { FC } from "react";
import "./JobInfo.scss";
import { Job } from "../../swagger/api";

interface JobInfoProps {
  job: Job;
}

const JobInfo: FC<JobInfoProps> = ({ job }) => {
  const {
    logo,
    company,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;
  return (
    <section className="job-info">
      <div className="job-info__text">
        <img src={logo} loading="lazy" alt={company} />
      </div>
      <div className="job-info__tools"></div>
    </section>
  );
};

export default JobInfo;
