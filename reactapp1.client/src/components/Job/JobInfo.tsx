import { FC } from "react";
import "./JobInfo.scss";
import { Job } from "../../swagger/api";

const JobInfo: FC<Job> = ({
  company,
  new: boolean,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  return (
    <section className="job-info">
      <div className="job-info__text"></div>
      <div className="job-info__tools"></div>
    </section>
  );
};

export default JobInfo;
