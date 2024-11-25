import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function SearchForm() {
  return (
    <form className="relative m-auto">
      <Button type="submit" variant="ghost" className="absolute" size="icon">
        <Search className="h-4 w-4 text-muted-foreground" />
      </Button>
      <Input
        type="search"
        placeholder="Search jobs..."
        className="w-full rounded-lg bg-background pl-12 md:w-[200px] lg:w-[336px]"
      />
    </form>
  );
}

export default SearchForm;
