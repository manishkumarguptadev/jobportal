import { useEffect, useState } from "react";

function useActiveId() {
  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      setActiveId(id);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeId;
}

export default useActiveId;
