export default function NavBar({ name }) {
  return (
    <nav className="flex justify-between">
      <p className="text-lg">{name}</p>
      <a className="flex items-center	text-lg">
        <p>LIGHT</p>
        <img src="light.svg" alt="" />
      </a>
    </nav>
  );
}
