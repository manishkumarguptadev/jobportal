import JobItem from "@/types/JobItem";
import JobList from "./JobList";

type Props = {
  jobItems: JobItem[];
  isLoading: boolean;
  error: string;
};

function Sidebar({ jobItems, isLoading, error }: Props) {
  return (
    <div className="ml-8 w-[30vw]">
      <JobList jobItems={jobItems} isLoading={isLoading} error={error} />
    </div>
  );
}

export default Sidebar;
