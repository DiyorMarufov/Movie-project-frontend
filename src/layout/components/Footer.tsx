import { memo } from "react";
import footerLogo from "../../shared/assets/footer/footer-logo.svg";
import { Link } from "react-router-dom";
import {
  Clapperboard,
  Facebook,
  Globe,
  HelpCircle,
  Instagram,
  Menu,
  Phone,
  Play,
  Smile,
  Sparkle,
  Youtube,
} from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-[118px] dark:bg-[#000000] dark:transition-all transition-all">
      <div className="container">
        <div className="grid grid-cols-4 gap-[30px] pt-[30px] pl-[25px] pb-[30px] bg-gray-100 rounded-[12px] max-lg:grid-cols-3 max-lg:gap-y-[50px] max-md:grid-cols-2 max-sm:grid-cols-1 dark:bg-[#111111] dark:text-[var(--color-py)] dark:transition-all transition-all">
          <div className="flex flex-col gap-[48px]">
            <div>
              <img src={footerLogo} alt="" />
            </div>
            <div className="flex flex-col gap-2 pl-[10px]">
              <div className="flex items-center gap-2.5">
                <div>
                  <FaGooglePlay className="text-[30px]" />
                </div>
                <div className="dark:text-[#ffffff]">
                  <p className="text-[13px] uppercase">Download from</p>
                  <p className="text-[18px]">Google Play</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div>
                  <FaApple className="text-[35px]" />
                </div>
                <div className="dark:text-[#ffffff]">
                  <p className="text-[13px] uppercase">Get it on</p>
                  <p className="text-[18px]">App Store</p>
                </div>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-[18px]">
            <div>
              <h1 className="dark:text-[#ffffff]">About Us</h1>
            </div>
            <div className="flex flex-col gap-[16px]">
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Menu />
                  <span className="dark:text-[#A1A1A1]">Public Offer</span>
                </Link>
              </li>
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Sparkle />
                  <span className="dark:text-[#A1A1A1]">Advertising</span>
                </Link>
              </li>
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <HelpCircle />
                  <span className="dark:text-[#A1A1A1]">F.A.Q</span>
                </Link>
              </li>
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Phone />
                  <span className="dark:text-[#A1A1A1]">Contacts</span>
                </Link>
              </li>
            </div>
          </ul>

          <ul className="flex flex-col gap-[18px]">
            <div>
              <h1 className="dark:text-[#ffffff] dark:transition-all transition-all">
                Categories
              </h1>
            </div>
            <div className="flex flex-col gap-[16px]">
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Play />
                  <span className="dark:text-[#A1A1A1] dark:transition-all transition-all">
                    Movies
                  </span>
                </Link>
              </li>
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Clapperboard />
                  <span className="dark:text-[#A1A1A1] dark:transition-all transition-all">
                    Theater
                  </span>
                </Link>
              </li>
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Smile />
                  <span className="dark:text-[#A1A1A1] dark:transition-all transition-all">
                    Concerts
                  </span>
                </Link>
              </li>
              <li>
                <Link to={""} className="flex items-center gap-2">
                  <Globe />
                  <span className="dark:text-[#A1A1A1] dark:transition-all transition-all">
                    Sports
                  </span>
                </Link>
              </li>
            </div>
          </ul>

          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-3">
              <h1 className="text-[16px] dark:text-[#ffffff] dark:transition-all transition-all">
                Contact Us
              </h1>
              <p className="text-[20px]">+998 (95) 897-33-38</p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="dark:text-[#ffffff] dark:transition-all transition-all">
                Social Media
              </h1>
              <div className="flex gap-5">
                <Instagram />
                <Facebook />
                <Youtube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
