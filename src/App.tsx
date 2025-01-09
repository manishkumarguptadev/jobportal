import { useEffect, useState } from "react";
import BackgroundPattern from "./components/BackgroundPattern";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./MainContent";
import useJobItems from "./hooks/useJobItems";
import useActiveId from "./hooks/useActiveId";
import axios, { AxiosError, CanceledError } from "axios";
import { JobItemExpanded } from "./types";
export default function App() {
  const [searchText, setSearchText] = useState("");

  const [jobItems, isLoading, error] = useJobItems(searchText);
  const [jobItem, setJobItem] = useState<JobItemExpanded | null>(null);
  const activeId = useActiveId();
  const [isLoadingJobItem, setIsLoadingJobItem] = useState(false);
  const [errorJobItem, setErrorJobItem] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    if (!activeId) return;
    const fetchJobItem = async () => {
      try {
        setIsLoadingJobItem(true);
        const res = await axios.get<JobItemExpanded>(
          `https://testapis-nu.vercel.app/api/jobitems/${activeId}`,
          { signal: controller.signal },
        );
        setIsLoadingJobItem(false);
        setJobItem(res.data);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setIsLoadingJobItem(false);
        if (error instanceof AxiosError) {
          const message = error.response?.data.message || "Server Unavailable";
          setErrorJobItem(message);
        }
      }
    };

    fetchJobItem();
    return () => controller.abort();
  }, [activeId]);
  return (
    <>
      <BackgroundPattern />

      <div className="mx-auto flex min-h-screen max-w-[1050px] flex-col px-4">
        <Header
          searchText={searchText}
          setSearchText={setSearchText}
          setJobItem={setJobItem}
        />
        <MainContent
          jobItems={jobItems}
          isLoading={isLoading}
          error={error}
          jobItem={jobItem}
          isLoadingJobItem={isLoadingJobItem}
          errorJobItem={errorJobItem}
        />
        <Footer />
      </div>
    </>
  );
}
