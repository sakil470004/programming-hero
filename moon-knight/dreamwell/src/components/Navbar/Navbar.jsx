import React from "react";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/jewelry"}>Jewelry</Link>
      </li>
      <li>
        <Link to={"/myjewelry"}>My Jewelry</Link>
      </li>
      <li>
        <Link to={"/addjewelry"}>Add Jewelry</Link>
      </li>
      <li>
        <Link to={"/blogs"}>Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="bg-mix-4">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 list-none shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div>
            <img className="" width={100} src={logo} />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold ">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <Link
            className="btn btn-sm bg-mix text-white hover:text-black"
            to={"/login"}
          >
            Login
          </Link>
          <Link
            className="btn btn-outline btn-sm text-mix bg-white"
            to={"/signin"}
          >
            Sign In
          </Link>
          <div className="avatar ">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://th.bing.com/th/id/OIP.wlMwawdnFE1IXgrS3BGUvwHaLG?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
            </div>
          </div>
          <button className="btn btn-sm bg-mix text-white hover:text-black">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
