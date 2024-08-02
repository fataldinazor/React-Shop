import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const getLinkClasses = ({ isActive }) =>
    `${
      isActive
        ? "text-blue-500 border-blue-500 "
        : "text-white border-slate-900"
    } px-4 py-1 border-b-2 hover:text-blue-500 hover:border-b-2 hover:border-blue-500`;

  return (
    <div className="flex bg-slate-900 w-full p-4 text-white items-center justify-between shadow-md">
      <div className="text-3xl font-bold">
        <Link
          to="/"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          React Store
        </Link>
      </div>

      <div className="flex gap-x-8">
        <NavLink to="/" className={getLinkClasses}>
          Home
        </NavLink>
        <NavLink to="/shop" className={getLinkClasses}>
          Shop
        </NavLink>
        <NavLink to="/about" className={getLinkClasses}>
          About
        </NavLink>
      </div>

      <div className="text-2xl">
        <NavLink to="/cart" className="flex items-center">
          <span role="img" aria-label="cart">
            🛒
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
