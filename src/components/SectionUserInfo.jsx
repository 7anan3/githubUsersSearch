import { useContext } from "react";
import { AppContext } from "../GithubUsers";
import NavBar from "./NavBar";
export default function SectionUserInfo({
  avatar,
  date,
  bio,
  repos,
  followers,
  following,
  location,
  url,
  twitter,
  name1,
}) {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  console.log(isDarkMode);
  return (
    <section className="shadow rounded-lg py-6 px-6 bg-white dark:bg-blue1">
      <div className="flex">
        <figure className="w-48">
          <img src={avatar} alt="avatar" className="rounded-full " />
        </figure>
        <div>
          <p>{name1}</p>
          <p>{name1}</p>
          <p>{date}</p>
        </div>
      </div>
      <div className="my-8 text-grey2 text-base font-medium dark:text-white">
        <p>{bio}</p>
      </div>
      <div className="flex justify-between text-center px-4 py-6 rounded-lg bg-greylight dark:bg-navy dark:text-white">
        <div>
          <p className="font-light">Repos</p>
          <p>{repos}</p>
        </div>
        <div>
          <p className="font-light">Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p className="font-light">Following</p>
          <p>{following}</p>
        </div>
      </div>
      <div className="mt-8 dark:text-white">
        <div className="flex mb-4">
          <img src="map-pin.svg" alt="map pin" className="w-6 mr-4" />
          <div>{location}</div>
        </div>
        <div className="flex mb-4">
          <img src="link.svg" alt="link" className="w-6 mr-4" />
          <div>{url}</div>
        </div>
        <div className="flex mb-4">
          <img src="twitter-icon.svg" alt="twitter icon" className="w-6 mr-4" />
          <div>{twitter}</div>
        </div>
        <div className="flex mb-4">
          <img
            src="building-office.svg"
            alt="building office"
            className="w-6 mr-4"
          />
          <div>{twitter}</div>
        </div>
      </div>
    </section>
  );
}
