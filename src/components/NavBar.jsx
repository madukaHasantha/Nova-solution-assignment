import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import mainTheme from '../themes/theme';

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="p-1 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 md:mt-5 md:-ml-14">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-auto h-8 mr-2 sm:h-10"
              />
              <h1 className="text-[40px] font-normal text-black ">
                Treasure
              </h1>
            </Link>
          </div>
          <div className="block sm:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isNavbarOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isNavbarOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className={`${isNavbarOpen ? 'block' : 'hidden'} sm:flex sm:items-center sm:space-x-4 mt-4 sm:mt-0`}>
            <Link
              to="/"
              className="block px-3 py-2 text-lg font-medium text-gray-500 rounded-md hover:text-gray-900 sm:inline-block"
              style={{ color: mainTheme.colors.primary, fontFamily: mainTheme.typography.secondaryFont }}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 text-lg font-medium text-gray-500 rounded-md hover:text-gray-900 sm:inline-block"
              style={{ color: mainTheme.colors.fontPrimary, fontFamily: mainTheme.typography.secondaryFont }}
            >
              Bridal
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 text-lg font-medium text-gray-500 rounded-md hover:text-gray-900 sm:inline-block"
              style={{ color: mainTheme.colors.fontPrimary, fontFamily: mainTheme.typography.secondaryFont }}
            >
              Exclusive
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 text-lg font-medium text-gray-500 rounded-md hover:text-gray-900 sm:inline-block"
              style={{ color: mainTheme.colors.fontPrimary, fontFamily: mainTheme.typography.secondaryFont }}
            >
              Collections
            </Link>
            <Link
              to="#"
              className="block px-3 py-2 text-lg font-medium text-gray-500 rounded-md hover:text-gray-900 sm:inline-block"
              style={{ color: mainTheme.colors.fontPrimary, fontFamily: mainTheme.typography.secondaryFont }}
            >
              About
            </Link>
            <Link
              to=""
              className="block px-3 py-2 text-lg font-medium text-gray-500 rounded-md hover:text-gray-900 sm:inline-block"
              style={{ color: mainTheme.colors.fontPrimary, fontFamily: mainTheme.typography.secondaryFont }}
            >
              <i className="mr-1 fa fa-shopping-bag fa-sm"></i>
              <span className="hidden md:inline"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
