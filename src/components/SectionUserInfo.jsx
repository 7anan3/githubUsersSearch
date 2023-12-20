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
      <div>
        <div>
          <p>Repos</p>
          <p>{repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
      <div>
        <div>{location}</div>
      </div>
      <div>
        <div>{url}</div>
      </div>
      <div>
        <div>{twitter}</div>
      </div>
      <div>
        <div>{twitter}</div>
      </div>
    </section>
  );
}
