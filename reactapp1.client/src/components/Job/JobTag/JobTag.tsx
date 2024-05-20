import { FC } from "react";
import "./JobTag.scss";
import { useJobStore } from "../../../JobStore";
import removeIcon from "../../../assets/images/icon-remove.svg";
import { observer } from "mobx-react";

interface JobTagProps {
  tagContent?: string;
  isFromFilter?: boolean;
}

const JobTag: FC<JobTagProps> = ({ tagContent, isFromFilter }) => {
  const jobStore = useJobStore();
  return (
    <span className={isFromFilter ? "job-tag filtered" : "job-tag"}>
      <button onClick={() => tagContent && jobStore.addTagToFilter(tagContent)}>
        {tagContent}
      </button>
      {isFromFilter && (
        <img
          src={removeIcon}
          loading="lazy"
          alt="Remove Icon"
          onClick={() => tagContent && jobStore.removeTagFromFilter(tagContent)}
        />
      )}
    </span>
  );
};

const JobTagObserver = observer(JobTag);

export default JobTagObserver;
