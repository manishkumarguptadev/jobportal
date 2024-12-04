import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRef } from "react";

type Props = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};
function SearchForm({ searchText, setSearchText }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
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
