import ContentBlock from "./components/ContentBlock";
import JobDetails from "./components/JobDetails";
import JobList from "./components/JobList";

function MainContent() {
  return (
    <main>
      <div className="grid grid-rows-[500px_500px] gap-4 md:h-[420px] md:grid-cols-3 md:grid-rows-[45px_1fr]">
        <div className="relative md:col-span-1 md:col-start-1 md:row-span-full md:row-start-1">
          <ContentBlock>
            <JobList />
          </ContentBlock>
        </div>

        <div className="md:col-span-full md:col-start-2 md:row-span-full md:row-start-1">
          <ContentBlock>
            <JobDetails />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
}

export default MainContent;