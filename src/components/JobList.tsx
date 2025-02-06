import { JobItem } from "@/types";
import Spinner from "./Spinner";
import JobListItem from "./JobListItem";
import useActiveId from "@/hooks/useActiveId";
import ResultsCount from "./ResultsCount";

type Props = {
  jobItems: JobItem[];
  isLoading: boolean;
  error: string;
};
function JobList({ jobItems, isLoading, error }: Props) {
  const resultsCount = jobItems.length;
  const activeId = useActiveId();
  return (
    <>
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Spinner />
        </div>
      ) : error ? (
        <div className="flex h-full items-center justify-center text-destructive">
          {error}
        </div>
      ) : (
        <div>
          <div className="flex h-9 items-center gap-1 border-b p-4">
            <ResultsCount resultsCount={resultsCount} />
          </div>
          <ul>
            {jobItems.map((jobItem) => (
              <JobListItem
                key={jobItem.id}
                jobItem={jobItem}
                isActive={jobItem.id === activeId}
              ></JobListItem>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default JobList;
