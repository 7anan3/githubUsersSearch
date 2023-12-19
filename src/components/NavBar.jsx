export default function NavBar({ name }) {
  return (
    <nav className="flex justify-between">
      <p>{name}</p>
      <a className="flex">
        <p>LIGHT</p>
        <img src="light.svg" alt="" />
      </a>
    </nav>
  );
}
