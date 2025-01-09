import { JobItemExpanded } from "@/types";
import axios, { CanceledError, AxiosError } from "axios";
import { useEffect, useState } from "react";

function useJobItem(activeId: string | null) {
  const [jobItem, setJobItem] = useState<JobItemExpanded | null>(null);
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
  return [jobItem, setJobItem, isLoading, error] as const;
}

export default useJobItem;
