import React from "react";

const Header = ({ user, onLogout }) => {


    let link=<>

               <li><a href="/">Home</a></li>
            <li><a href="/learnPage">Start Learning</a></li>
            <li><a href="/tutorialpage">Tutorials</a></li>
            <li><a href="/">About Us</a></li>
    
    
    </>
  return (
    <header className="bg-base-100 w-full">
      <div className="navbar px-4 lg:px-8">
        {/* Logo */}
        <div className="flex-1">
          <a className="text-2xl font-bold text-primary" href="/">
            Lingo Bingo
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex flex-none">
          <ul className="menu menu-horizontal px-1">
            {link}
            {user && <li><a href="/my-profile">My Profile</a></li>}
          </ul>
        </div>

        {/* User Info / Authentication */}
        <div className="flex-none">
          {!user ? (
            <a href="/login" className="btn btn-primary btn-sm">Login</a>
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
                <li><a href="/my-profile">Profile</a></li>
                <li>
                  <button onClick={onLogout} className="btn btn-error btn-sm">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
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
            {link}
            {user && <li><a href="/my-profile">My Profile</a></li>}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
