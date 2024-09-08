import { useState } from 'react';
import logo from '../assets/Logo2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('register'); // Register is active by default
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu toggle

  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-8 md:h-10" // Adjusted height for mobile
          />
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button
            className="text-secondary hover:text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Nav Links for larger screens */}
        <nav className="hidden items-center space-x-6 md:flex">
          <Link
            to="/"
            onClick={() => setActiveLink('home')}
            className={`${
              activeLink === 'home' ? 'text-primary ' : 'text-secondary'
            } px-4 py-2 rounded-lg hover:text-primary`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setActiveLink('about')}
            className={`${
              activeLink === 'about' ? 'text-primary ' : 'text-secondary'
            } px-4 py-2 rounded-lg hover:text-primary`}
          >
            About
          </Link>
          <Link
            onClick={() => setActiveLink('contact')}
            to="/contact"
            className={`${
              activeLink === 'contact' ? 'text-primary ' : 'text-secondary'
            } px-4 py-2 rounded-lg hover:text-primary`}
          >
            Contact
          </Link>
          <div className="relative">
            <button
              onClick={() => setShowLoginDropdown(!showLoginDropdown)}
              className={`${
                activeLink === 'login' ? 'text-primary ' : 'text-secondary'
              } px-4 py-2 rounded-lg hover:text-primary`}
            >
              Login
            </button>
            {showLoginDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-300 bg-white shadow-lg">
                <Link
                  to="/login-patient"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign in as Patient
                </Link>
                <Link
                  to="/login-hospital"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign in as Hospital
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => {
                setShowRegisterDropdown(!showRegisterDropdown);
                setActiveLink('register');
              }}
              className={`${
                activeLink === 'register'
                  ? 'text-background bg-primary '
                  : 'text-secondary'
              } px-4 py-2 rounded-xl`}
            >
              Register
            </button>
            {showRegisterDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-300 bg-white shadow-lg">
                <Link
                  to="/register-patient"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Register as Patient
                </Link>
                <Link
                  to="/register-hospital"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Register as Hospital
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="absolute left-0 top-20 w-full bg-white shadow-md md:hidden">
            <ul className="space-y-4 py-4">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    setActiveLink('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2 ${
                    activeLink === 'home' ? 'text-primary ' : 'text-secondary'
                  } hover:text-primary`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    setActiveLink('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2 ${
                    activeLink === 'about' ? 'text-primary ' : 'text-secondary'
                  } hover:text-primary`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => {
                    setActiveLink('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2 ${
                    activeLink === 'contact'
                      ? 'text-primary '
                      : 'text-secondary'
                  } hover:text-primary`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                  className="block w-full px-4 py-2 text-secondary hover:text-primary"
                >
                  Login
                </button>
                {showLoginDropdown && (
                  <div className="px-4">
                    <Link
                      to="/login-patient"
                      className="block py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Sign in as Patient
                    </Link>
                    <Link
                      to="/login-hospital"
                      className="block py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Sign in as Hospital
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={() => {
                    setShowRegisterDropdown(!showRegisterDropdown);
                    setActiveLink('register');
                  }}
                  className="block w-full px-4 py-2 text-secondary hover:text-primary"
                >
                  Register
                </button>
                {showRegisterDropdown && (
                  <div className="px-4">
                    <Link
                      to="/register-patient"
                      className="block py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Register as Patient
                    </Link>
                    <Link
                      to="/register-hospital"
                      className="block py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Register as Hospital
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;