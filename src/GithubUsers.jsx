import { createContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

export const AppContext = createContext();

export default function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  const accessToken = "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";

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
    <AppContext.Provider value={{ user, users }}>
      <main className="p-6">
        <NavBar name={user[0] && user[0].login} />
        <SearchBar />
        <div>{user[0] && user[0].location}</div>
      </main>
    </AppContext.Provider>
  );
}
