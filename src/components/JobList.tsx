import { JobItem } from "@/types";
import Spinner from "./Spinner";
import JobListItem from "./JobListItem";
import useActiveId from "@/hooks/useActiveId";

type Props = {
  jobItems: JobItem[];
  isLoading: boolean;
  error: string;
};
function JobList({ jobItems, isLoading, error }: Props) {
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
        <ul>
          {jobItems.map((jobItem) => (
            <JobListItem
              key={jobItem.id}
              jobItem={jobItem}
              isActive={jobItem.id === activeId}
            ></JobListItem>
          ))}
        </ul>
      )}
    </>
  );
}

export default JobList;
