// import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiLogout } from 'react-icons/hi';
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserDoctor, FaUsers } from "react-icons/fa6";
// import { IoMdSettings } from "react-icons/io";
import logo from '../../assets/Logo2.png'

const DoctorSidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  // console.log(path);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/")
  }


  return (
    <div className=" flex flex-col bg-white text-light h-screen overflow-hidden">
      <div className="flex items-center justify-center p-4">
        <img src={logo} width={200} alt="" className=' ' />
      </div>
      <nav className="flex-grow text-gray-600  py-4 px-6">
        <ul className='flex flex-col gap-4'>
          <li className={`p-3 rounded-xl ${path == "/doctor/dashboard"  ? "bg-primary text-white" : ""}  `}>
            <Link
              to="./dashboard"
            >
              <div className="flex items-center space-x-2">
                <MdSpaceDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li className={`p-3 rounded-xl ${path == "/doctor/Appointments" ? "bg-primary text-white" : ""}  `}>
            <Link
              to="./Appointments"

            >
              <div className="flex items-center space-x-2">
                <FaUserDoctor className="w-5 h-5" />
                <span>Appointments</span>
              </div>
            </Link>
          </li>
          <li className={`p-3 rounded-xl ${path == "/doctor/Admitted"  ? "bg-primary text-white" : ""}  `}>
            <Link
              to="./Admitted"

            >
              <div className="flex items-center space-x-2">
                <FaUsers className="w-5 h-5" />
                <span>Admitted</span>
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
export default DoctorSidebar;
