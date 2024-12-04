import { BASE_API_URL } from "@/lib/constants";
import { JobItem } from "@/types";
import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

function useJobItems(searchText: string) {
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

  return [jobItems, isLoading, error] as const;
}

export default useJobItems;
