import { FC } from "react";
import { observer } from "mobx-react";
import "./JobInfo.scss";
import { Job } from "../../swagger/api";
import JobTag from "./JobTag/JobTag";

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
    <section className={featured ? "job-info featured" : "job-info"}>
      <div className="job-info__text">
        <img src={logo} loading="lazy" alt={company} />
        <div>
          <div className="job-info__text__about">
            <h3 className="job-info__text__about__company">{company}</h3>
            <div className="job-info__text__about__status">
              {job.new && <span className="status new">New!</span>}
              {featured && <span className="status featured">Featured</span>}
            </div>
          </div>
          <h3 className="job-info__text__position">{position}</h3>
          <div className="job-info__text__small-details">
            {postedAt} - {contract} - {location}
          </div>
        </div>
      </div>
      <div className="job-info__requirements">
        <JobTag tagContent={role} />
        <JobTag tagContent={level} />
        {languages?.map((language, index) => (
          <JobTag key={index} tagContent={language} />
        ))}
        {tools?.map((tool, index) => (
          <JobTag key={index} tagContent={tool} />
        ))}
      </div>
    </section>
  );
};

const ObservedJobInfo = observer(JobInfo);
export default ObservedJobInfo;
