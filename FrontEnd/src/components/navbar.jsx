import { useState } from 'react';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('register'); // Register is active by default
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);

  // Function to handle clicking on a link
  const handleNavLinkClick = (link) => {
    setActiveLink(link); // Set the clicked link as active
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="absolute h-40"
          />
        </div>

        {/* Nav Links */}
        <nav className="hidden items-center space-x-6 md:flex">
          <a
            href="#home"
            onClick={() => handleNavLinkClick('home')}
            className={`${
              activeLink === 'home' ? 'bg-primary text-white' : 'text-gray-600'
            } px-4 py-2 rounded-lg hover:bg-primary hover:text-white`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => handleNavLinkClick('about')}
            className={`${
              activeLink === 'about' ? 'bg-primary text-white' : 'text-gray-600'
            } px-4 py-2 rounded-lg hover:bg-primary hover:text-white`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => handleNavLinkClick('contact')}
            className={`${
              activeLink === 'contact' ? 'bg-primary text-white' : 'text-gray-600'
            } px-4 py-2 rounded-lg hover:bg-primary hover:text-white`}
          >
            Contact
          </a>
          <div className="relative">
            <button
              onClick={() => setShowLoginDropdown(!showLoginDropdown)}
              className={`${
                activeLink === 'login' ? 'bg-primary text-white' : 'text-gray-600'
              } px-4 py-2 rounded-lg hover:bg-primary hover:text-white`}
            >
              Login
            </button>
            {showLoginDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-300 bg-white shadow-lg">
                <a
                  href="#sign-in-user"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign in as User
                </a>
                <a
                  href="#sign-in-admin"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign in as Hospital Admin
                </a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => {
                setShowRegisterDropdown(!showRegisterDropdown);
                handleNavLinkClick('register');
              }}
              className={`${
                activeLink === 'register' ? 'bg-primary' : 'bg-gray-600'
              } text-white px-4 py-2 rounded-lg hover:bg-primary`}
            >
              Register
            </button>
            {showRegisterDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-300 bg-white shadow-lg">
                <a
                  href="#register-user"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Register as User
                </a>
                <a
                  href="#register-admin"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Register as Hospital Admin
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
