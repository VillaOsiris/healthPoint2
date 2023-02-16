import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import Logo from "../assets/images/hp_logo.png";

const Footer = () => {
  return (
    <footer id="footer" className="flex items-center justify-between p-10">
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
      <section className="">
        <section>
          <h2 className="">Company</h2>
          <ul>
            <li className="">
              <a href="/about" className="">
                About
              </a>
            </li>
            <li className="">
              <a href="#events" className="">
                Events
              </a>
            </li>
            <li className="">
              <a href="/" className="">
                Sponsors
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="er">Support</h2>
          <ul>
            <li className="">
              <a href="#contact" className="">
                Contacts
              </a>
            </li>
            <li className="">
              <a href="#faq" className="">
                FAQ
              </a>
            </li>
            <li className="">
              <a href="#legal" className="">
                Legal
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="">Socials</h2>
          <ul>
            <li className="">
              <a href="https://instagram.com" target="_blank" className="">
                <FaInstagram />
              </a>
            </li>
            <li className="footer__text">
              <a
                href="https://facebook.com"
                target="_blank"
                className="footer__icon"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li className="footer__text">
              <a
                href="https://twitter.com"
                target="_blank"
                className="footer__icon"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
