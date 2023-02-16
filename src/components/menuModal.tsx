export default function MenuModal() {
  return (
    <div className="fixed z-40 w-full h-full top-0 left-0 bg-pink-100">
      <ul className="flex gap-6">
        <li className="transition duration-500 hover:text-pink-400">
          <a href="#hero">Home</a>
        </li>
        <li className="transition duration-500 hover:text-pink-400">
          <a href="#about">About</a>
        </li>
        <li className="transition duration-500 hover:text-pink-400">
          <a href="#events">Events</a>
        </li>
        <li className="transition duration-500 hover:text-pink-400">
          <a href="#footer">Contacts</a>
        </li>
      </ul>
    </div>
  );
}
