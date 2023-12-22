import { createContext, useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";

export const AppContext = createContext();

export default function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const accessToken = "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";

  //Get the data from the API
  useEffect(() => {
    fetch("https://api.github.com/users", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);

        const promises = data.map((user) => {
          return fetch(user.url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }).then((userUrlRes) => userUrlRes.json());
        });
        return Promise.all(promises);
      })
      .then((userDetails) => {
        setUser(userDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [accessToken]);

  return (
    <AppContext.Provider value={{ user, users, isDarkMode, setIsDarkMode }}>
      <main
        className={`${
          isDarkMode ? "dark bg-navy" : ""
        } py-12 px-6 bg-greylight`}
      >
        <SearchBar />
      </main>
    </AppContext.Provider>
  );
}
