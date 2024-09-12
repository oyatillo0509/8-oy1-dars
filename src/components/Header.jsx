import React from "react";
import logo from "../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/languageSlice";
import { toggleTheme } from "../redux/themeSlice";

function Header({ texts }) {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const handleLanguageChange = (e) => dispatch(changeLanguage(e.target.value));
  const handleThemeToggle = () => dispatch(toggleTheme());

  const themeClasses = isDarkMode
    ? "bg-gray-900 text-white"
    : "bg-white text-black";

  return (
    <header className={`${themeClasses} w-full transition duration-300`}>
      <div className="container mx-auto w-[1200px] p-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-32 h-auto" />
        </a>

        <nav>
          <ul className="flex space-x-8">
            <li>
              <a href="/" className="hover:underline">
                {texts.home}
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                {texts.about}
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                {texts.products}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Language Switch */}
          <select
            className={`px-4 py-2 rounded-full border-2 shadow focus:outline-none focus:ring-2 focus:ring-purple-500 w-40 transition duration-300 ${
              isDarkMode
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-white text-black border-gray-300"
            }`}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
          </select>

          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleThemeToggle}
              checked={isDarkMode}
            />
            <svg
              className={`swap-off h-7 w-7 fill-current transition-all ${
                !isDarkMode ? "" : "hidden"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 3V1M12 23v-2M4.22 4.22l-1.42-1.42M20.8 20.8l-1.42-1.42M1 12h2M23 12h2M4.22 19.78l-1.42 1.42M20.8 3.22l-1.42 1.42" />
            </svg>
            <svg
              className={`swap-on h-7 w-7 fill-current transition-all ${
                isDarkMode ? "" : "hidden"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16z" />
            </svg>
          </label>

          <button className="px-4 py-2 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-300">
            {texts.clone}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
