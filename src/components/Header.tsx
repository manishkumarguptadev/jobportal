import SearchForm from "./SearchForm";

type Props = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

function Header({ searchText, setSearchText }: Props) {
  return (
    <div className="grid h-24 grid-cols-3 bg-primary">
      <div></div>
      <SearchForm searchText={searchText} setSearchText={setSearchText} />
      <div></div>
    </div>
  );
}

export default Header;
