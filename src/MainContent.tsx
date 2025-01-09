import ContentBlock from "./components/ContentBlock";
import JobDetails from "./components/JobDetails";
import JobList from "./components/JobList";
import { JobItem, JobItemExpanded } from "./types";
type Props = {
  jobItems: JobItem[];
  isLoading: boolean;
  error: string;
  jobItem: JobItemExpanded | null;
  isLoadingJobItem: boolean;
  errorJobItem: string;
};

function MainContent({
  jobItems,
  isLoading,
  error,
  jobItem,
  isLoadingJobItem,
  errorJobItem,
}: Props) {
  return (
    <main>
      <div className="grid grid-rows-[500px_500px] gap-4 md:h-[420px] md:grid-cols-3 md:grid-rows-[45px_1fr]">
        <div className="relative md:col-span-1 md:col-start-1 md:row-span-full md:row-start-1">
          <ContentBlock>
            <JobList jobItems={jobItems} isLoading={isLoading} error={error} />
          </ContentBlock>
        </div>

        <div className="md:col-span-full md:col-start-2 md:row-span-full md:row-start-1">
          <ContentBlock>
            <JobDetails
              jobItem={jobItem}
              isLoadingJobItem={isLoadingJobItem}
              errorJobItem={errorJobItem}
            />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
