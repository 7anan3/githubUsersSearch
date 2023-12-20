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
  return (
    <section className="shadow rounded-lg pt-6 px-8">
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
      <div className="my-8 text-grey2 text-base font-light">
        <p>{bio}</p>
      </div>
      <div className="flex justify-between text-center bg-grey2 px-8 py-6 rounded-lg ">
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
      <div className="my-8">
        <div className="flex mb-4">
          <img src="map-pin.svg" alt="map pin" className="w-6" />
          <div>{location}</div>
        </div>
        <div className="flex mb-4">
          <img src="link.svg" alt="link" className="w-6" />
          <div>{url}</div>
        </div>
        <div className="flex mb-4">
          <img src="twitter-icon.svg" alt="twitter icon" className="w-6" />
          <div>{twitter}</div>
        </div>
        <div className="flex mb-4">
          <img
            src="building-office.svg"
            alt="building office"
            className="w-6"
          />
          <div>{twitter}</div>
        </div>
      </div>
    </section>
  );
}
