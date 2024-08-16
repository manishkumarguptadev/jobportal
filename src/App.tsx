import { useState } from "react";
import Header from "./components/Header";
import JobDetails from "./components/JobDetails";
import Sidebar from "./components/Sidebar";
import useActiveId from "./hooks/useActiveId";
import useJobItem from "./hooks/useJobItem";
import useJobItems from "./hooks/useJobItems";

function App() {
  const [searchText, setSearchText] = useState("");
  const [jobItems, isLoadingJobItems, errorJobItems] = useJobItems(searchText);

  const activeId = useActiveId();
  const [jobItem, setJobItem, isLoadingJobItem, errorJobItem] =
    useJobItem(activeId);

  return (
    <div className="bg-gray-200">
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        setJobItem={setJobItem}
      />
      <div className="flex bg-muted/50 px-20 py-4">
        <Sidebar
          jobItems={jobItems}
          isLoading={isLoadingJobItems}
          error={errorJobItems}
        />
        <JobDetails
          jobItem={jobItem}
          isLoading={isLoadingJobItem}
          error={errorJobItem}
        />
      </div>
    </div>
  );
}

export default App;
