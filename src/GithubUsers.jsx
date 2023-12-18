import { useEffect } from "react";
import NavBar from "./components/NavBar";
import { useState } from "react";
export default function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const accessToken = `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`;

  useEffect(() => {
    fetch("https://api.github.com/users", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        const promises = users.map((user) => {
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
    <main className="p-6">
      <NavBar />
    </main>
  );
}
