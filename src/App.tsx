import { useEffect, useState } from "react";
import Header from "./components/Header";
import JobDetails from "./components/JobDetails";
import Sidebar from "./components/Sidebar";
import JobItem from "./types/JobItem";
import { BASE_API_URL } from "@/lib/constants";
import axios, { AxiosError, CanceledError } from "axios";

function App() {
  const [searchText, setSearchText] = useState("");
  const [jobItems, setJobItems] = useState<JobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    if (!searchText) return;
    const fetchJobItems = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get<JobItem[]>(
          `${BASE_API_URL}?search=${searchText}`,
          { signal: controller.signal },
        );
        setIsLoading(false);
        setJobItems(res.data);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setIsLoading(false);
        if (error instanceof AxiosError) {
          const message = error.response?.data.message || "Server Unavailable";
          setError(message);
        }
      }
    };

    fetchJobItems();
    return () => controller.abort();
  }, [searchText]);
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
