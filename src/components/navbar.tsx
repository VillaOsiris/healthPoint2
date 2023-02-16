import { useState } from "react";
import Logo from "@/assets/images/hp_logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/mediaHook";

type Props = {};

const Navbar = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

  return (
    <nav className="flex items-center justify-between fixed top-0 z-40 w-full p-2 px-20 bg-pink-100 text-red-600 font-mono font-semibold">
      <figure className="flex ">
        <img src={Logo} alt="Health point logo" width="60" height="60" />
        <p className="self-end text-lg font-bold">HealthPoint</p>
      </figure>

      {isAboveMediumScreens ? (
        <div className="flex items-center text-lg">
          <ul className="flex gap-4">
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
      ) : (
        <button
          type="button"
          className="rounded-md border-pink-400 border-2 p-1"
        >
          {isNavOpen ? (
            <XMarkIcon
              className="h-6 w-6 text-pink-400"
              onClick={() => setIsNavOpen(false)}
            />
          ) : (
            <Bars3Icon
              className="h-6 w-6 text-pink-400"
              onClick={() => setIsNavOpen(true)}
            />
          )}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
