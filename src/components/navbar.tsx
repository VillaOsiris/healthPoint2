import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/images/hp_logo.png";
import useMediaQuery from "@/hooks/mediaHook";
import MenuModal from "./menuModal";

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
          <button className="bg-red-600 text-white p-2 px-4 rounded-full ml-10 transition duration-500 hover:bg-pink-400">
            Try Now!
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="rounded-md border-pink-400 border-2 p-1"
        >
          {!isNavOpen ? (
            <Bars3Icon
              className="h-6 w-6 text-pink-400 z-50"
              onClick={() => setIsNavOpen(true)}
            />
          ) : (
            <div className="fixed z-40 w-full h-full top-0 left-0 bg-pink-100">
              <button
                type="button"
                className="rounded-md border-pink-400 border-2 p-1"
              >
                <XMarkIcon
                  className="h-6 w-6 text-pink-400 z-50"
                  onClick={() => setIsNavOpen(false)}
                />
              </button>
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
          )}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
