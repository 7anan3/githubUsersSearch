import { useContext, useState } from "react";
import { AppContext } from "../GithubUsers";
export default function SearchBar() {
  const { user, users } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const handleSearch = (e) => {
    e.preventDefault();

    const result = user.find((userr) => userr.login === searchInput);
    if (result) {
      setSearchResult(result);
    } else {
      setSearchResult(null);
    }
  };
  console.log(searchResult);
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search Github username"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <button className="bg-blue2" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
}
