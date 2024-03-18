import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="bg-white p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-auto sm:h-10 mr-2"
              />
              <h1 className="text-primary text-lg font-normal" style={{ fontSize: '40px', color: '#9A8350'}}>
                Treasure
              </h1>
            </Link>
          </div>
          <div className="block sm:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
              className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium block sm:inline-block"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium block sm:inline-block"
            >
              Bridal
            </Link>
            <Link
              to="/shop"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium block sm:inline-block"
            >
              Exclusive
            </Link>
            <Link
              to="/shop"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium block sm:inline-block"
            >
              Collections
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium block sm:inline-block"
            >
              About
            </Link>
            <Link
              to="/cart"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium block sm:inline-block"
            >
              <i className="fa fa-shopping-bag fa-sm mr-1"></i>
              <span className="hidden md:inline"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
