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
        <footer className="bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">Footer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Footer Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Make Appointment
                </h3>
                <p className="text-gray-600 mb-4">
                  You don&#39;t have to bother because we provide an appointment
                  with the doctor of your choice.
                </p>
                <img src={L2} alt="QR Code" className="mx-auto" />{" "}
                {/* Local L2 image */}
              </div>

              {/* Footer Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Your Virtual AI Assist
                </h3>
                <p className="text-gray-600 mb-4">
                  We make it easy for you to make and solve your problems
                  virtually.
                </p>
                <img src={L2} alt="QR Code" className="mx-auto" />{" "}
                {/* Local L2 image */}
              </div>

              {/* Footer Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Online Pharmacy
                </h3>
                <p className="text-gray-600 mb-4">
                  We can also provide you with prescription medicine after your
                  online consultation.
                </p>
                <img src={L2} alt="QR Code" className="mx-auto" />{" "}
                {/* Local L2 image */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
