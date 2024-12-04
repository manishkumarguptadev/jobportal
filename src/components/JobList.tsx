import { JobItem } from "@/types";
import Spinner from "./Spinner";

type Props = {
  jobItems: JobItem[];
  isLoading: boolean;
  error: string;
};
function JobList({ jobItems, isLoading, error }: Props) {
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
            <li key={jobItem.id}>{jobItem.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default JobList;
