import React, { useContext } from "react";
import { Context } from "./AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, signOuts } = useContext(Context);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOuts()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // Handle error
      });
  };

  const navigationLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-primary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/learnPage" className="hover:text-primary">
          Start Learning
        </NavLink>
      </li>
      <li>
        <NavLink to="/tutorialpage" className="hover:text-primary">
          Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="hover:text-primary">
          About Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/my-profile" className="hover:text-primary">
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <header className="bg-base-100 w-full shadow-md">
      <div className="navbar flex-wrap px-4 lg:px-8">
        {/* Logo and Welcome Message */}
        <div className="flex-1 flex flex-col items-start lg:items-center lg:flex-row">
          <a
            className="text-2xl font-bold text-primary mb-2 lg:mb-0 lg:mr-4"
            href="/"
          >
            Lingo Bingo
          </a>
          {user && (
           <div className="flex gap-5 items-center">
             <h2 className="text-sm text-gray-600">
              Welcome, <span className="font-semibold">{user.displayName}</span>
            </h2>
            <button
            onClick={handleLogOut}
            className="btn btn-error btn-sm ml-3"
          >
            Logout
          </button>
            </div>
          )}
          
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-none">
          <ul className="menu menu-horizontal space-x-4">{navigationLinks}</ul>
        </div>

        {/* User Info / Authentication */}
        <div className="flex-none">
          {!user ? (
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/my-profile">Profile</Link>
                </li>
              </ul>
              
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden z-10">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigationLinks}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
