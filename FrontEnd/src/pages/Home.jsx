import { FaSearch } from "react-icons/fa"; // Import FaSearch from react-icons
import Navbar from "../components/navbar";
import L1 from "../assets/L1.png"; // Import L1.png (local image)
import L2 from "../assets/L2.jpeg"; // Import L2.jpeg (local image)
// import Bg from "../assets/bg.jpg"; // Import L2.jpeg (local image)
import { AiOutlineSchedule } from 'react-icons/ai';  // Make Appointment Icon
import { FaRobot } from 'react-icons/fa';  // Virtual AI Assist Icon
import { GiMedicines } from 'react-icons/gi';  // Online Pharmacy Icon

const Home = () => {
  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <Navbar /> {/* Use Navbar Component */}
      {/* Main Content */}
      <div className="flex-grow">
        <section className="flex  bg-custom-bg flex-col items-center justify-center pt-20">
          <div className="mx-auto flex w-10/12 flex-col items-center justify-between md:flex-row">
            <div className="w-8/12 h-full">
              <h1 className="text-5xl pb-10 font-bold text-blue-900 md:text-6xl">
                Revolutionise Your <br /> Hospital Management <br /> By just a
                QR
              </h1>
              <p className="text-xl pb-8 text-blue-900">
                Care+ Streamline operations, enhance patient care, and optimize
                resource allocation with our cutting-edge platform.
              </p>
              <button className="rounded-2xl bg-primary px-6 py-3 mb-10 text-white w-fit">
                Make Appointment
              </button>
            </div>
            <div className="w-6/12">
              <img src={L1} alt="QR Code" className="" /> {/* Local L1 image */}
            </div>
          </div>
        </section>

        {/* New Section for the Search Bar */}
        {/* Second Section: Search Bar */}
        <section className="py-20">
          <div className="container mx-auto flex flex-col items-center justify-center space-y-8 px-8">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-center text-blue-900">
              Find the Best Healthcare Services Near You
            </h2>
            <p className="text-lg text-center text-gray-700 max-w-3xl">
              Use our search tool to locate the best hospitals and doctors in your area. Whether you&339;re looking for a specialist or general services, we can help you find what you need.
            </p>

            {/* Search Bar with Dropdowns */}
            <div className="w-full md:w-8/12 space-y-4">
              <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-center">
                {/* City Dropdown */}
                <select
                  className="w-full md:w-1/3 rounded-2xl border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="">Select City</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                </select>

                {/* Hospital Dropdown */}
                <select
                  className="w-full md:w-1/3 rounded-2xl border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="">Select Hospital</option>
                  <option value="General Hospital">General Hospital</option>
                  <option value="City Medical Center">City Medical Center</option>
                  <option value="Health Care Hospital">Health Care Hospital</option>
                </select>

                {/* Search Button */}
                <button className="flex items-center rounded-2xl bg-primary px-4 py-2 text-white hover:bg-red-600">
                  <FaSearch className="mr-2" /> Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section: Services */}
        <section className="bg-gray-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-3xl font-bold text-blue-900">
              We will serve you with healthcare services
            </h2>
            <p className="mb-10 mt-2 text-center text-gray-600">
              We provide a variety of services that can make it easier for you to fulfill your needs.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

              {/* Make Appointment Service */}
              <div className="rounded-2xl bg-white p-8 text-center">
                <AiOutlineSchedule className="mx-auto h-20 w-20 text-blue-900" /> {/* Appointment Icon */}
                <h3 className="text-xl font-semibold text-blue-900 mt-4">
                  Make Appointment
                </h3>
                <p className="mt-2 text-gray-600">
                  You don’t have to bother because we provide appointment with the doctor of your choice.
                </p>
              </div>

              {/* Virtual AI Assist Service */}
              <div className="rounded-2xl bg-white p-8 text-center">
                <FaRobot className="mx-auto h-20 w-20 text-blue-900" /> {/* AI Assist Icon */}
                <h3 className="text-xl font-semibold text-blue-900 mt-4">
                  Your Virtual AI Assist
                </h3>
                <p className="mt-2 text-gray-600">
                  We make it easy for you to make and solve your problems virtually.
                </p>
              </div>

              {/* Online Pharmacy Service */}
              <div className="rounded-2xl bg-white p-8 text-center">
                <GiMedicines className="mx-auto h-20 w-20 text-blue-900" /> {/* Pharmacy Icon */}
                <h3 className="text-xl font-semibold text-blue-900 mt-4">
                  Online Pharmacy
                </h3>
                <p className="mt-2 text-gray-600">
                  We can also provide you with prescription medicine after your online consultation.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* Statistics Section */}

        <section className=" py-16"> {/* Light red background */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">

            {/* Left Section with Text and Image */}
            <div className="flex flex-col items-start justify-start">
              {/* Title */}
              <h2 className="text-3xl font-bold text-blue-900 md:text-4xl mb-6">
                We will serve you with healthcare services
              </h2>
              {/* Image */}
              <img src={L2} alt="Healthcare Service" className="rounded-2xl" />
            </div>

            {/* Right Section with Numbered Details */}
            <div className="grid grid-cols-1 gap-6">
              {/* Card 1 */}
              <div className="rounded-2xl bg-white p-8 text-center">
                <p className="mb-2 text-lg text-gray-600">
                  Registered Hospitals
                </p>
                <p className="text-5xl font-bold text-primary">24 +</p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-white p-8 text-center">
                <p className="mb-2 text-lg text-gray-600">Verified Doctors</p>
                <p className="text-5xl font-bold text-primary">101 +</p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl bg-white p-8 text-center">
                <p className="mb-2 text-lg text-gray-600">Registered Labs</p>
                <p className="text-5xl font-bold text-primary">44 +</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-secondary text-white py-8 md:px-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* <!-- Services Section --> */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Services</h2>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Emergency Care</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Cardiology</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Pharmacy</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Consultations</a></li>
              </ul>
            </div>

            {/* <!-- Quick Links Section --> */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Home</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Contact</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">FAQ</a></li>
              </ul>
            </div>

            {/* <!-- Contact Section --> */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-400 mb-2">123 Medical Lane, Health City, USA</p>
              <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
              <p className="text-gray-400 mb-2">Email: contact@medicare.com</p>

              {/* <!-- Social Media Icons --> */}
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="#" className="hover:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.73 0-1.325.596-1.325 1.326v21.348c0 .73.596 1.326 1.325 1.326h11.488v-9.29h-3.123v-3.622h3.123v-2.669c0-3.1 1.893-4.785 4.659-4.785 1.325 0 2.463.099 2.794.143v3.236h-1.918c-1.504 0-1.795.715-1.795 1.764v2.311h3.588l-.467 3.622h-3.121v9.29h6.104c.73 0 1.326-.596 1.326-1.326v-21.35c0-.73-.596-1.326-1.326-1.326z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.203-4.92 4.917 0 .386.045.762.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.728-.667 1.574-.667 2.475 0 1.708.87 3.215 2.19 4.099-.807-.026-1.566-.247-2.228-.617v.061c0 2.385 1.698 4.374 3.946 4.827-.414.113-.849.172-1.296.172-.316 0-.625-.03-.926-.086.631 1.953 2.445 3.377 4.6 3.419-1.685 1.319-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.174-.069 2.18 1.396 4.768 2.212 7.548 2.212 9.057 0 14.009-7.506 14.009-14.009 0-.213-.005-.426-.014-.637.962-.695 1.8-1.562 2.462-2.549z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.625 0-12 5.373-12 12 0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12zm0 21.818c-5.421 0-9.818-4.396-9.818-9.818 0-5.423 4.396-9.818 9.818-9.818 5.423 0 9.818 4.396 9.818 9.818 0 5.422-4.396 9.818-9.818 9.818zm1.768-13.081h-1.539v-1.818h-2v1.818h-1.818v2h1.818v4.545h2v-4.545h1.768v-2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-gray-500">&copy; 2024 MediCare. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
