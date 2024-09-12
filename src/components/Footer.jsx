import React from "react";
import logo from "../assets/logo.svg";
import { useSelector } from "react-redux";

function Footer({ subscribeText }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const darkModeClasses = isDarkMode
    ? "bg-gray-900 text-white border-gray-700 bg-gray-800"
    : "bg-white text-gray-600 border-gray-200";

  return (
    <footer className={`${darkModeClasses} py-8 border-t-2`}>
      <div className="container mx-auto w-[1200px] flex justify-between items-center">
        <div className="flex flex-col items-start">
          <a href="logo">
            <img src={logo} alt="Logo" />
          </a>
          <p className="mt-2">
            Copyright © 2021 BRIX Templates | All Rights Reserved
          </p>
        </div>

        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className={`p-3 rounded-full border-2 ${darkModeClasses} shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-64`}
          />
          <button className="ml-2 px-6 py-3 rounded-full bg-[#4E20FF] text-white font-bold shadow-md hover:bg-purple-700 transition duration-300">
            Subscribe {subscribeText}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
