import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import JobItem from "@/types/JobItem";
import Spinner from "./Spinner";
import JobListItem from "./JobListItem";

type Props = {
  jobItems: JobItem[];
  isLoading: boolean;
  error: string;
};
function JobList({ jobItems, isLoading, error }: Props) {
  return (
    <Card className="h-[418px] w-full">
      <CardHeader className="flex h-10 flex-row items-center border-b px-6 py-3"></CardHeader>

      <CardContent className="h-[336px] overflow-auto px-4">
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
              <JobListItem key={jobItem.id} jobItem={jobItem}></JobListItem>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="flex h-10 flex-row items-center border-t px-6 py-3"></CardFooter>
    </Card>
  );
}

export default JobList;
