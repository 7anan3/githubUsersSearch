import { useContext, useState } from "react";
import { AppContext } from "../GithubUsers";
import NavBar from "./NavBar";
import SectionUserInfo from "./SectionUserInfo";
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

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  console.log(user);
  return (
    <div>
      <NavBar name={searchResult && searchResult.login} />
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
      <SectionUserInfo
        avatar={searchResult && searchResult.avatar_url}
        date={searchResult && searchResult.created_at}
        bio={searchResult && searchResult.bio}
        repos={searchResult && searchResult.public_repos}
        followers={searchResult && searchResult.followers}
        following={searchResult && searchResult.following}
        location={searchResult && searchResult.location}
        url={searchResult && searchResult.html_url}
        twitter={searchResult && searchResult.twitter_username}
      />
    </div>
  );
}
