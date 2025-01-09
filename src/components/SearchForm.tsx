import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRef } from "react";
import { JobItemExpanded } from "@/types";

type Props = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setJobItem: React.Dispatch<React.SetStateAction<JobItemExpanded | null>>;
};
function SearchForm({ searchText, setSearchText, setJobItem }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        history.pushState(
          "",
          document.title,
          window.location.pathname + window.location.search,
        );
        setJobItem(null);
        if (inputRef.current) {
          setSearchText(inputRef.current?.value);
        }
      }}
      className="relative m-auto"
    >
      <Button type="submit" variant="ghost" className="absolute" size="icon">
        <Search className="h-4 w-4 text-muted-foreground" />
      </Button>
      <Input
        defaultValue={searchText}
        ref={inputRef}
        type="search"
        placeholder="Search jobs..."
        className="w-full rounded-lg bg-background pl-12 md:w-[200px] lg:w-[336px]"
      />
    </form>
  );
}

export default SearchForm;
