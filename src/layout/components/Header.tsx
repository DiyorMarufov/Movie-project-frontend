import { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../shared/assets/header/logo.svg";
import {
  Clapperboard,
  Film,
  Heart,
  Search,
  Menu,
  Sun,
  Moon,
} from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const handleMode = () => {
    const newMode = !darkMode;
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };
  return (
    <header className="sticky top-0 z-50 bg-[#ffffff] dark:bg-[#000000] dark:transition-all transition-all">
      <nav className="container h-20 flex justify-between items-center">
          <div>
            <NavLink to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
          </div>

          <ul className="flex max-[700px]:hidden">
            <li className="px-4.5">
              <NavLink
                end={true}
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[var(--color-py)]"
                      : "dark:text-[#A1A1A1] dark:transition-all text-[black]"
                  } transition-all flex flex-col justify-center items-center gap-2`
                }
              >
                <Film />
                <span>Home</span>
              </NavLink>
            </li>
            <li className="px-4.5">
              <NavLink
                to={"/movie"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[var(--color-py)]"
                      : "dark:text-[#A1A1A1] dark:transition-all text-[black]"
                  } transition-all flex flex-col justify-center items-center gap-2`
                }
              >
                <Clapperboard />
                <span>Movie</span>
              </NavLink>
            </li>
            <li className="px-4.5">
              <NavLink
                to={"/sac"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[var(--color-py)]"
                      : "dark:text-[#A1A1A1] dark:transition-all text-[black]"
                  } transition-all flex flex-col justify-center items-center gap-2`
                }
              >
                <Search />
                <span>Search</span>
              </NavLink>
            </li>

            <li className="px-4.5">
              <NavLink
                to={"/sc"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[var(--color-py)]"
                      : "dark:text-[#A1A1A1] dark:transition-all text-[black]"
                  } transition-all flex flex-col justify-center items-center gap-2`
                }
              >
                <Heart />
                <span>Favorite</span>
              </NavLink>
            </li>
          </ul>

        <div className="flex items-center gap-3 max-[700px]:hidden">
          <div className="relative inline-block px-4 py-2">
            <select className="appearance-none bg-transparent pr-6 pl-2 py-1 text-sm font-medium text-gray-800 focus:outline-none dark:text-[var(--color-py)] dark:transition-all transition-all">
              <option value="eng" selected>
                eng
              </option>
              <option value="uzb">uzb</option>
              <option value="ru">ru</option>
            </select>
            <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 text-xs">
              ▼
            </div>
          </div>

          

          <div className="cursor-pointer select-none" onClick={handleMode}>
            {!darkMode ? (
              <Moon className="text-[#111111] hover:opacity-80" />
            ) : (
              <Sun className="text-[var(--color-py)] hover:opacity-80" />
            )}
          </div>
        </div>

        <Menu className="min-[700px]:hidden ml-auto" />
      </nav>
    </header>
  );
};

export default memo(Header);
