import { FC } from "react";
import "./JobTag.scss";

interface JobTagProps {
  tagContent?: string;
}

const JobTag: FC<JobTagProps> = ({ tagContent }) => {
  return <button className="job-tag">{tagContent}</button>;
};

export default JobTag;
