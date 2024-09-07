import { useState } from 'react';
import logo from '../assets/Logo.png'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('register'); // Register is active by default
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
 

  return (
    <header className="sticky top-0 z-10 bg-white ">
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
          <Link
            to={"/"}
            onClick={()=>setActiveLink("home")}
            className={`${
              activeLink === 'home' ? 'text-primary ' : 'text-secondary'
              } px-4 py-2 rounded-lg hover:text-primary`}
          >
            Home
          </Link>
          <Link
          onClick={()=>setActiveLink("about")}
            className={`${
              activeLink === 'about' ? 'text-primary ' : 'text-secondary'
              } px-4 py-2 rounded-lg hover:text-primary`}
          >
            About
          </Link>
          <Link
           onClick={()=>setActiveLink("contact")}
           
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
                to={"/login-patient"}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign in as User
                </Link>
                <Link
                  to={"/login-hospital"}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign in as Hospital Admin
                </Link>
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
                activeLink === 'register' ? 'text-background bg-primary ' : 'text-secondary'
              } px-4 py-2 rounded-xl`}
            >
              Register
            </button>
            {showRegisterDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-300 bg-white shadow-lg">
                <Link
                  to={"/register-patient"}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Register as User
                </Link>
                <Link
                  
                 to={"/register-hospital"}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Register as Hospital
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
