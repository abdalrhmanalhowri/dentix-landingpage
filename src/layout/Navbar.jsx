import Image from "next/image";
import logo from "@/assets/images/DentixLogoPNG.png";
import Link from "next/link";
import { RiChat3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <header>
      <Image src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#WhoWeAre">من نحن؟</Link>
          </li>
          <li>
            <Link href="#">ما الذي نقدمه؟</Link>
          </li>
          <li>
            <Link href="#">كيف يعمل النظام </Link>
          </li>
          <li>
            <Link href="#">الأسئلة الشائعة </Link>
          </li>
        </ul>
      </nav>
      <button title="ابدأ الآن">
        <RiChat3Line />
        <span> ابدأ الآن</span>
      </button>
    </header>
  );
};

export default Navbar;
