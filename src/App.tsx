import { BASE_API_URL } from "@/lib/constants";
import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
import BackgroundPattern from "./components/BackgroundPattern";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./MainContent";
import { JobItem } from "./types";
export default function App() {
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
    <>
      <BackgroundPattern />

      <div className="mx-auto flex min-h-screen max-w-[1050px] flex-col px-4">
        <Header searchText={searchText} setSearchText={setSearchText} />
        <MainContent jobItems={jobItems} isLoading={isLoading} error={error} />
        <Footer />
      </div>
    </>
  );
}
