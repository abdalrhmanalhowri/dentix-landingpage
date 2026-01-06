import logo from "@/assets/images/DentixLogoPNG.png";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <a href="">اتصل بنا</a>
        <Image src={logo} alt="logo" />
      </div>
      <div className="bottom">
        <ul>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaXTwitter />
          </li>
        </ul>
        <div className="copyright">© 2025 عيادة د. جميع الحقوق محفوظة.</div>
      </div>
    </footer>
  );
};

export default Footer;
