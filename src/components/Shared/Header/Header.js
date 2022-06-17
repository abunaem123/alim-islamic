import React from "react";

const Header = () => {
  return (
    <div class="navbar bg-black sticky top-0 text-white md:px-12 bg-base-100 h-20 z-10">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-black lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img className="w-36" src="https://i.ibb.co/hBkDVR6/3-logo.png" alt="" />
      </div>
      <div class="navbar-center hidden text-black  lg:flex">
        <ul class="menu menu-horizontal  text-end p-0">
          <li>
            <a className="hover:text-secondary">Item 1</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <button className="btn btn-primary text-white rounded-full hover:btn-secondary hover:text-white">Want To Visite ?</button>
      </div>
    </div>
  );
};

export default Header;
