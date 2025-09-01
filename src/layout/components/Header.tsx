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
  X,
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

  const [burger, setBurger] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#ffffff] dark:bg-[#000000] dark:transition-all transition-all">
        <nav className="relative container h-20 flex justify-between items-center">
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
                to={"/search-movie"}
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
                to={"/favorite-movie"}
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

          {!burger && (
            <Menu
              className="min-[700px]:hidden transition-all dark:text-[var(--color-py)]"
              onClick={() => setBurger((p) => !p)}
            />
          )}
        </nav>
      </header>

      {burger && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/30 z-40 transition-all"
            onClick={() => setBurger(false)}
          ></div>
          <div className="fixed top-0 right-0 w-[250px] h-screen bg-white transition-all dark:bg-[#000000] z-50 min-[700px]:hidden p-6 shadow-lg">
            <button
              className="mb-4 text-right w-full text-gray-800 dark:text-gray-200"
              onClick={() => setBurger(false)}
            >
              <X className="absolute top-6 right-5 w-[20px] h-[20px] dark:text-[var(--color-py)] dark:transition-all transition-all" />
            </button>
            <ul className="flex flex-col gap-6">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[var(--color-py)]"
                        : "dark:text-[#A1A1A1] dark:transition-all text-[black]"
                    } transition-all flex items-center gap-3`
                  }
                  to="/"
                  onClick={() => setBurger(false)}
                >
                  <Film />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[var(--color-py)]"
                        : "dark:text-[#A1A1A1] dark:transition-all text-[black]"
                    } transition-all flex items-center gap-3`
                  }
                  to="/movie"
                  onClick={() => setBurger(false)}
                >
                  <Clapperboard />
                  Movie
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[var(--color-py)]"
                        : "dark:text-[#A1A1A1] dark:transition-all text-[black]"
                    } transition-all flex items-center gap-3`
                  }
                  to="/search-movie"
                  onClick={() => setBurger(false)}
                >
                  <Search />
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[var(--color-py)]"
                        : "dark:text-[#A1A1A1] dark:transition-all text-[black]"
                    } transition-all flex items-center gap-3`
                  }
                  to="/favorite-movie"
                  onClick={() => setBurger(false)}
                >
                  <Heart />
                  Favorite
                </NavLink>
              </li>

              <li>
                <div
                  className="cursor-pointer select-none flex items-center gap-3"
                  onClick={handleMode}
                >
                  {!darkMode ? (
                    <Moon className="text-[#111111] hover:opacity-80" />
                  ) : (
                    <Sun className="text-[var(--color-py)] hover:opacity-80" />
                  )}
                  <span className="dark:text-[#A1A1A1] dark:transition-all transition-all">
                    {!darkMode ? "Dark Mode" : "Light Mode"}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default memo(Header);
