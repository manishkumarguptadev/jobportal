import Header from "./components/Header";
import JobDetails from "./components/JobDetails";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import useJobItems from "./hooks/useJobItems";

function App() {
  const [searchText, setSearchText] = useState("");
  const [jobItems, isLoading, error] = useJobItems(searchText);
  return (
    <div>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <div className="flex bg-muted/50 px-20 py-4">
        <Sidebar jobItems={jobItems} isLoading={isLoading} error={error} />
        <JobDetails />
      </div>
    </div>
  );
}

export default App;
