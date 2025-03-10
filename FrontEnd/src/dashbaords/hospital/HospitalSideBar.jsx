// import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiChatAlt, HiLogout } from 'react-icons/hi';
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserDoctor, FaUsers } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import logo from '../../assets/Logo2.png'

const HospitalSidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  // console.log(path);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/login-hospital")
  }


  return (
    <div className=" flex flex-col bg-white text-light h-screen overflow-hidden">
      <div className="flex items-center justify-center p-4">
        <img src={logo} width={200} alt="" className=' ' />
      </div>
      <nav className="flex-grow text-gray-600  py-4 px-6">
        <ul className='flex flex-col gap-4'>
          <li className={`p-3 rounded-xl ${path == "/hospital/dashboard"  ? "bg-primary text-white" : ""}  `}>
            <Link
              to="./dashboard"
            >
              <div className="flex items-center space-x-2">
                <MdSpaceDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li className={`p-3 rounded-xl ${path == "/hospital/doctors" ? "bg-primary text-white" : ""}  `}>
            <Link
              to="./doctors"

            >
              <div className="flex items-center space-x-2">
                <FaUserDoctor className="w-5 h-5" />
                <span>Doctors</span>
              </div>
            </Link>
          </li>
          <li className={`p-3 rounded-xl ${path == "/hospital/register-patient"  ? "bg-primary text-white" : ""}  `}>
            <Link
              to="./register-patient"

            >
              <div className="flex items-center space-x-2">
                <FaUsers className="w-5 h-5" />
                <span>Register Patient</span>
              </div>
            </Link>
          </li>
          <li className={`p-3 rounded-xl ${path == "/faculty/manage-feedbacks" ? "bg-white shadow-2xl text-secondary" : ""}  `}>
            <Link
              to="./manage-feedbacks"

            >
              <div className="flex items-center space-x-2">
                <HiChatAlt className="w-5 h-5" />
                <span>Manage Feedbacks</span>
              </div>
            </Link>
          </li>
          <li className={`p-3 rounded-xl ${path == "/faculty/system-feedbacks" ? "bg-white text-secondary" : ""}  `}>
            <Link
              to="./system-feedbacks"

            >
              <div className="flex items-center space-x-2">
                <IoMdSettings className="w-5 h-5" />
                <span>System Feedbacks</span>
              </div>
            </Link>
          </li>
          <li className='p-3 rounded-lg'>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2"
            >
              <HiLogout className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </li>


        </ul>
      </nav>

    </div>
  );
};
export default HospitalSidebar;
