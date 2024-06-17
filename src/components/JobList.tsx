import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

function JobList() {
  return (
    <Card className="h-[428px] w-full overflow-auto">
      <CardHeader className="flex flex-row items-center border-b px-6 py-3"></CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex flex-row items-center border-t px-6 py-3"></CardFooter>
    </Card>
  );
}

export default JobList;
