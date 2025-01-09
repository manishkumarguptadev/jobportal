import { useState } from "react";
import BackgroundPattern from "./components/BackgroundPattern";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./MainContent";
import useJobItems from "./hooks/useJobItems";
import useActiveId from "./hooks/useActiveId";
import useJobItem from "./hooks/useJobItem";
export default function App() {
  const [searchText, setSearchText] = useState("");

  const [jobItems, isLoading, error] = useJobItems(searchText);
  const activeId = useActiveId();
  const [jobItem, setJobItem, isLoadingJobItem, errorJobItem] =
    useJobItem(activeId);

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
