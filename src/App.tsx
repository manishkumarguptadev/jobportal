import Header from "./components/Header";
import JobDetails from "./components/JobDetails";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import useJobItems from "./hooks/useJobItems";
import useActiveId from "./hooks/useActiveId";
import axios, { AxiosError, CanceledError } from "axios";
import JobItemExpanded from "./types/JobItemExpanded";

function App() {
  const [searchText, setSearchText] = useState("");
  const [jobItems, isLoadingJobItems, errorsJobItems] = useJobItems(searchText);
  const [jobItem, setJobItem] = useState<JobItemExpanded | null>(null);
  const activeId = useActiveId();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    if (!activeId) return;
    const fetchJobItem = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get<JobItemExpanded>(
          `https://testapis-nu.vercel.app/api/jobitems/${activeId}`,
          { signal: controller.signal },
        );
        setIsLoading(false);
        setJobItem(res.data);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setIsLoading(false);
        if (error instanceof AxiosError) {
          const message = error.response?.data.message || "Server Unavailable";
          setError(message);
        }
      }
    };

    fetchJobItem();
    return () => controller.abort();
  }, [activeId]);
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
          error={errorsJobItems}
        />
        <JobDetails jobItem={jobItem} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
}

export default App;
