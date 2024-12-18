import { useEffect, useState } from "react";
import BackgroundPattern from "./components/BackgroundPattern";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./MainContent";
import useJobItems from "./hooks/useJobItems";
export default function App() {
  const [searchText, setSearchText] = useState("");

  const [jobItems, isLoading, error] = useJobItems(searchText);
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
