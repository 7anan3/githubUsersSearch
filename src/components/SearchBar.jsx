import { useContext, useState, useEffect } from "react";
import { AppContext } from "../GithubUsers";
import NavBar from "./NavBar";
import SectionUserInfo from "./SectionUserInfo";
export default function SearchBar() {
  const { user, users, isDarkMode, setIsDarkMode } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const storedSearchResult = localStorage.getItem("searchResult");
    if (storedSearchResult) {
      setSearchResult(JSON.parse(storedSearchResult));
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const result = user.find((userr) => userr.login === searchInput);
    if (result) {
      setSearchResult(result);
      localStorage.setItem("searchResult", JSON.stringify(result));
    } else {
      setSearchResult(null);
      localStorage.removeItem("searchResult");
    }
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <NavBar name={searchResult && searchResult.login} />
      <form className="flex items-center mt-8 mb-5">
        <div className="relative shrink-0 w-full">
          <input
            type="text"
            placeholder="Search Github username"
            value={searchInput}
            onChange={handleSearchInput}
            className="p-4 shadow w-full rounded-lg text-grey2 font-light dark:bg-blue1 dark:text-white"
          />
          <button
            className="bg-blue2 absolute top-1/2 right-[-33px] transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-lg text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </form>
      <SectionUserInfo
        avatar={searchResult && searchResult.avatar_url}
        date={searchResult && searchResult.created_at}
        bio={(searchResult && searchResult.bio) || "This profile has no bio"}
        repos={searchResult && searchResult.public_repos}
        followers={searchResult && searchResult.followers}
        following={searchResult && searchResult.following}
        location={searchResult && searchResult.location}
        url={searchResult && searchResult.html_url}
        twitter={searchResult && searchResult.twitter_username}
        name1={searchResult && searchResult.name}
        login={searchResult && searchResult.login}
        company={searchResult && searchResult.company}
      />
    </div>
  );
}
