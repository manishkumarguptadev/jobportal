import { JobItemExpanded } from "@/types";
import SearchForm from "./SearchForm";

type Props = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setJobItem: React.Dispatch<React.SetStateAction<JobItemExpanded | null>>;
};
function Header({ searchText, setSearchText, setJobItem }: Props) {
  return (
    <div className="grid h-24 grid-cols-3">
      <div></div>
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        setJobItem={setJobItem}
      />
      <div></div>
    </div>
  );
}

export default Header;
