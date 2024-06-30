import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import JobItem from "@/types/JobItem";
import Spinner from "./Spinner";

type Props = {
  jobItems: JobItem[];
  isLoading: boolean;
  error: string;
};
function JobList({ jobItems, isLoading, error }: Props) {
 
  return (
    <Card className="h-[418px] w-full">
      <CardHeader className="flex h-10 flex-row items-center border-b px-6 py-3"></CardHeader>

      <CardContent className="h-[336px] overflow-auto">
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
      </CardContent>

      <CardFooter className="flex h-10 flex-row items-center border-t px-6 py-3"></CardFooter>
    </Card>
  );
}

export default JobList;
