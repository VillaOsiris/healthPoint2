import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import Logo from "../assets/images/hp_logo.png";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex items-center justify-between p-10 pr-20 bg-pink-100 border-t-2 border-gray-300"
    >
      <section className="">
        <a style={{ textDecoration: "none" }} href="#hero">
          <figure className="flex">
            <img src={Logo} alt="Health point logo" width="60" height="60" />
            <p className="self-end text-lg font-bold">HealthPoint</p>
          </figure>
        </a>
        <p className="">&copy; HealthPoint Fitness Center, LLC. </p>
        <p className="">All righs reserved. </p>
      </section>
      <section className="flex gap-20 text-gray-500">
        <section>
          <h2 className="font-bold mb-2">Company</h2>
          <ul>
            <li className="mb-1">
              <a href="/about" className="">
                About
              </a>
            </li>
            <li className="mb-1">
              <a href="#events" className="">
                Events
              </a>
            </li>
            <li className="mb-1">
              <a href="/" className="">
                Sponsors
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold mb-2">Support</h2>
          <ul>
            <li className="mb-1">
              <a href="#contact" className="">
                Contacts
              </a>
            </li>
            <li className="mb-1">
              <a href="#faq" className="">
                FAQ
              </a>
            </li>
            <li className="mb-1">
              <a href="#legal" className="">
                Legal
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold mb-2">Socials</h2>
          <ul>
            <li className="mb-1">
              <a href="https://instagram.com" target="_blank" className="">
                <FaInstagram className="h-6 w-6" />
              </a>
            </li>
            <li className="mb-1">
              <a
                href="https://facebook.com"
                target="_blank"
                className="footer__icon"
              >
                <FaFacebookSquare className="h-6 w-6" />
              </a>
            </li>
            <li className="mb-1">
              <a
                href="https://twitter.com"
                target="_blank"
                className="footer__icon"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
