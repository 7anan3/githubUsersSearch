import { useContext, useState } from "react";
import { AppContext } from "../GithubUsers";
export default function SearchBar() {
  const { user, users } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search Github username"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <button className="bg-blue2">Search</button>
    </form>
  );
}
