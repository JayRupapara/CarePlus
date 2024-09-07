import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiHome, HiPlusCircle, HiBookOpen, HiChatAlt, HiLogout } from 'react-icons/hi';
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import logo from '../../assets/Logo2.png'

const PatientSidebar = () => {
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
      <nav className="flex-grow  py-4 px-6">
        <ul className='flex flex-col gap-4'>
          <li className={`p-3 rounded-xl ${path == "/patient/dashboard"  ? "bg-primary text-white" : ""}  `}>
            <Link
              to="./dashboard"
            >
              <div className="flex items-center space-x-2">
                <MdSpaceDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li className={`p-4 rounded-xl ${path == "/faculty/add-quiz" ? "bg-white shadow-2xl text-secondary" : ""}  `}>
            <Link
              to="./add-quiz"

            >
              <div className="flex items-center space-x-2">
                <HiPlusCircle className="w-5 h-5" />
                <span>Add New Quiz</span>
              </div>
            </Link>
          </li>
          <li className={`p-4 rounded-xl ${path == "/faculty/manage-quiz" || path == "/faculty/view-quiz/" || path == "/faculty/view-quiz/:id" || path == "/faculty/view-data" ? "bg-white shadow-2xl text-secondary" : ""}  `}>
            <Link
              to="./manage-quiz"

            >
              <div className="flex items-center space-x-2">
                <HiBookOpen className="w-5 h-5" />
                <span>Manage Quiz</span>
              </div>
            </Link>
          </li>
          <li className={`p-4 rounded-xl ${path == "/faculty/manage-feedbacks" ? "bg-white shadow-2xl text-secondary" : ""}  `}>
            <Link
              to="./manage-feedbacks"

            >
              <div className="flex items-center space-x-2">
                <HiChatAlt className="w-5 h-5" />
                <span>Manage Feedbacks</span>
              </div>
            </Link>
          </li>
          <li className={`p-4 rounded-xl ${path == "/faculty/system-feedbacks" ? "bg-white text-secondary" : ""}  `}>
            <Link
              to="./system-feedbacks"

            >
              <div className="flex items-center space-x-2">
                <IoMdSettings className="w-5 h-5" />
                <span>System Feedbacks</span>
              </div>
            </Link>
          </li>
          <li className='p-4 rounded-lg'>
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
export default PatientSidebar;
