import { useState } from "react";
import BackgroundPattern from "./components/BackgroundPattern";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./MainContent";
import useJobItems from "./hooks/useJobItems";
import useActiveId from "./hooks/useActiveId";
export default function App() {
  const [searchText, setSearchText] = useState("");

  const [jobItems, isLoading, error] = useJobItems(searchText);
  const activeId = useActiveId();
  console.log(activeId);

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
