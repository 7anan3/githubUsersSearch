import { useContext } from "react";
import { AppContext } from "../GithubUsers";
export default function NavBar({ name }) {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <nav className="flex justify-between">
      <p className="text-lg">{name}</p>
      <a
        className="flex items-center text-lg"
        role="button"
        tabIndex={0}
        onClick={toggleDarkMode}
      >
        <p>{isDarkMode ? "LIGHT" : "DARK"}</p>
        <img src="light.svg" alt="" />
      </a>
    </nav>
  );
}
