import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="w-[75%] mx-auto flex justify-between py-4 items-center">
        {/* Logo */}
        <div>
          <h1 className="text-2xl text-[#F9543F] font-semibold">Carlox</h1>
        </div>
        {/* Nav */}
        <nav className="flex gap-4 text-lg">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        {/* Login */}
        <div className="flex gap-4 items-center">
          <a href="#">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-[#EEF6F3] px-4 py-2 rounded-md bg-[#F9543F]  hover:bg-[#ff4b33] "
          >
            Singup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
