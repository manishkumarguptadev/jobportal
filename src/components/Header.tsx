import SearchForm from "./SearchForm";

function Header() {
  return (
    <div className="grid h-24 grid-cols-3 bg-primary">
      <div></div>
      <SearchForm />
      <div></div>
    </div>
  );
}

export default Header;
