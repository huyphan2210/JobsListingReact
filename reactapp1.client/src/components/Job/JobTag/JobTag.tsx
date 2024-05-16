import { FC } from "react";
import "./JobTag.scss";
import { useJobStore } from "../../../JobStore";

interface JobTagProps {
  tagContent?: string;
}

const JobTag: FC<JobTagProps> = ({ tagContent }) => {
  const jobStore = useJobStore();
  return (
    <button
      className="job-tag"
      onClick={() => tagContent && jobStore.addTagToFilter(tagContent)}
    >
      {tagContent}
    </button>
  );
};

export default JobTag;
