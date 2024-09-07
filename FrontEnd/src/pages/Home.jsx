import React, { useState } from "react";
import { FaHospital, FaSearch } from "react-icons/fa";

const Home = () => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);

  return (

    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-6">
          {/* Logo with React Icon */}
          <div className="flex items-center">
            <img
              src="https://i.postimg.cc/GpQH50jK/output-onlinepngtools.png"
              alt="abc"
              className="absolute h-40"
            />
            {/* <FaHospital className="text-red-500 h-8 w-8 mr-2" /> */}
            {/* <span className="text-xl font-bold text-gray-800">CarePlus</span> */}
          </div>

          {/* Nav Links */}
          <nav className="hidden items-center space-x-6 md:flex">
            <a href="#home" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
            <div className="relative">
              <button
                onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                className="text-gray-600 hover:text-gray-900"
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
                onClick={() => setShowRegisterDropdown(!showRegisterDropdown)}
                className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
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

      {/* Main Content */}
      <div className="flex-grow">
        <section className="flex h-[85vh] flex-col items-center justify-center bg-gradient-to-b from-white to-red-100 py-16">
          <div className="mx-auto my-14 flex w-10/12 flex-col items-center justify-between px-8 md:flex-row">
            <div className="w-8/12 space-y-6">
              <h1 className="text-5xl font-bold text-blue-900 md:text-6xl">
                Revolutionise Your <br /> Hospital Management
              </h1>
              <p className="text-xl text-blue-900">
                Care+ Streamline operations, enhance patient care, and optimize
                resource allocation with our cutting-edge platform.
              </p>
              <button className="rounded-lg bg-red-500 px-6 py-3 text-white">
                Make Appointment
              </button>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center rounded-2xl bg-white p-10 md:mt-0">
              <img src="dummy-qr.png" alt="QR Code" className="h-40 w-40" />
              <p className="mt-2 text-gray-700">
                Patient Name
                <br />
                2342-6345-4124
              </p>
            </div>
          </div>
          <div className="container mx-auto flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            {/* Search Bar for Hospital */}
            <input
              type="text"
              placeholder="Search Hospital..."
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring md:w-1/3"
            />
            {/* Search Bar for City */}
            <input
              type="text"
              placeholder="Search City..."
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring md:w-1/3"
            />
            {/* Search Button */}
            <button className="flex items-center rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600">
              <FaSearch className="mr-2" /> Search
            </button>
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-3xl font-bold text-blue-900">
              We will serve you with healthcare services
            </h2>
            <p className="mb-10 mt-2 text-center text-gray-600">
              We provide a variety of services that can make it easier for you
              to fulfill your needs.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-8 text-center">
                <h3 className="text-xl font-semibold text-blue-900">
                  Make Appointment
                </h3>
                <p className="mt-2 text-gray-600">
                  You don’t have to bother because we provide appointment with
                  the doctor of your choice.
                </p>
                <img
                  src="dummy-qr.png"
                  alt="QR Code"
                  className="mx-auto mt-4 h-20 w-20"
                />
              </div>
              <div className="rounded-lg bg-white p-8 text-center">
                <h3 className="text-xl font-semibold text-blue-900">
                  Your Virtual AI Assist
                </h3>
                <p className="mt-2 text-gray-600">
                  We make it easy for you to make and solve your problems
                  virtually.
                </p>
                <img
                  src="dummy-qr.png"
                  alt="QR Code"
                  className="mx-auto mt-4 h-20 w-20"
                />
              </div>
              <div className="rounded-lg bg-white p-8 text-center">
                <h3 className="text-xl font-semibold text-blue-900">
                  Online Pharmacy
                </h3>
                <p className="mt-2 text-gray-600">
                  We can also provide you with prescription medicine after your
                  online consultation.
                </p>
                <img
                  src="dummy-qr.png"
                  alt="QR Code"
                  className="mx-auto mt-4 h-20 w-20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
            {/* Left Text Section (Aligned to the top left) */}
            <div className="flex items-start justify-start">
              <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
                We will serve you with healthcare services
              </h2>
            </div>

            {/* Right Statistics Section */}
            <div className="grid grid-cols-1 gap-6">
              {/* Card 1 */}
              <div className="rounded-lg bg-white p-8 text-left shadow-md">
                <p className="mb-2 text-lg text-gray-600">
                  Registered Hospitals
                </p>
                <p className="text-5xl font-bold text-red-500">24 +</p>
              </div>

              {/* Card 2 */}
              <div className="rounded-lg bg-white p-8 text-left shadow-md">
                <p className="mb-2 text-lg text-gray-600">Verified Doctors</p>
                <p className="text-5xl font-bold text-red-500">101 +</p>
              </div>

              {/* Card 3 */}
              <div className="rounded-lg bg-white p-8 text-left shadow-md">
                <p className="mb-2 text-lg text-gray-600">Registered Labs</p>
                <p className="text-5xl font-bold text-red-500">44 +</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">Footer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Make Appointment
                </h3>
                <p className="text-gray-600 mb-4">
                  You don&#39;t have to bother because we provide an appointment with
                  the doctor of your choice.
                </p>
                <img
                  src="https://via.placeholder.com/100x100.png?text=QR+Code"
                  alt="QR Code"
                  className="mx-auto"
                />
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Your Virtual AI Assist
                </h3>
                <p className="text-gray-600 mb-4">
                  We make it easy for you to make and solve your problems virtually.
                </p>
                <img
                  src="https://via.placeholder.com/100x100.png?text=QR+Code"
                  alt="QR Code"
                  className="mx-auto"
                />
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Online Pharmacy
                </h3>
                <p className="text-gray-600 mb-4">
                  We can also provide you with prescription medicine after your
                  online consultation.
                </p>
                <img
                  src="https://via.placeholder.com/100x100.png?text=QR+Code"
                  alt="QR Code"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>

  )
}

export default Home