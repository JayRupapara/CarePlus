import React, { useState, useEffect } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { Route, Routes, useNavigate } from 'react-router-dom';
// import { parseJwt } from '../model/JwtDecode';
import { FaUserAlt } from "react-icons/fa";
import PatientSidebar from './PatientSideBar';
import Dashboard from '../../pages/patient/dashboard';


function PatientDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [UserName, setUserName] = useState("Raj Markana");
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // const handleAuthUser = async()=>{

  //   if(localStorage.getItem("token")){
  //     const token = localStorage.getItem("token");
  //     const parse = parseJwt(token);
  //     setUserName(parse.username);

  //     if(parse.role=="Student"){
  //       navigate("/student");
  //     }      
  //     else if(parse.role=="Faculty"){
  //       navigate("/faculty");
  //     }
  //     else{
  //       navigate("/");
  //     }
  //   }
  //   else{
  //     navigate("/");
  //   }
  // } 

  // useEffect(() => {
  //   handleAuthUser();
  //   if (screen.width < 960) {
  //     setSidebarOpen(false)
  // }
  // },[navigate])



  return (
    <>
      <div className='grid text-secondary bg-background grid-cols-6'>

        <div className={`sm:col-span-1 col-span-3 ${sidebarOpen ? 'block' : 'hidden'}`}>
          <PatientSidebar />
        </div>

        <div className={`${sidebarOpen ? 'sm:col-span-5 col-span-3 ' : ' sm:col-span-6 col-span-6 '}  h-screen overflow-y-auto  overflow-x-hidden`}>

          <div className='text-secondary relative z-10 flex justify-between items-center py-4 px-4 w-full  bg-white'>
            <div className='flex justify-center  items-center sm:gap-10 gap-5'>
              <FaBarsStaggered className='text-xl cursor-pointer ' onClick={toggleSidebar} />
              <h2 className='font-semibold  sm:text-2xl text-lg'>
                <Routes>
                  <Route path='/dashboard' element={'Dashboard'}></Route>
                  <Route path='/add-quiz' element={'Add Quiz'}></Route>
                  <Route path='/manage-quiz' element={'Manage Quiz'}></Route>
                  <Route exact path='/view-quiz/:id' element={'View Quiz'}></Route>
                  <Route path='/view-data/*' element={'View Data'}></Route>
                  <Route path='/manage-feedbacks' element={'Manage Feedbacks'}></Route>
                  <Route path='/system-feedbacks' element={'System Feedbacks'}></Route>
                  <Route path='/update-quiz/*' element={'Update Quiz'}></Route>
                </Routes>
              </h2>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <div className='text-end'>
                <p className='font-medium text-xl'>{UserName}</p>
              </div>

              <div className='p-2 sm:text-2xl text-lg bg-white text-primary rounded-full'><FaUserAlt /></div>
            </div>
          </div>

          <div className='px-3'>
            <div className="mt-2">
              {/* Background */}
              <div className="BackgroundPatternDesign w-screen h-screen flex flex-nowrap fixed top-0 right-0 z-0">
                <div className="w-[100px] h-screen border-r border-[#d9d9d9]"></div>
                <div className="w-[100px] h-screen border-r border-[#d9d9d9]"></div>
                <div className="w-[100px] h-screen border-r border-[#d9d9d9]"></div>
                <div className="w-[100px] h-screen border-r border-[#d9d9d9]"></div>
                <div className="w-[100px] h-screen border-r border-[#d9d9d9]"></div>
                <div className="w-[100px] h-screen border-r border-[#d9d9d9]"></div>
                <div className="w-[100px] h-screen border-r border-[#d9d9d9]"></div>
                <div className="w-[100px] h-screen border-r border-[#d9d9d9]"></div>
                <div className="w-[100px] h-screen border-r border-[#d9d9d9]"></div>
                <div className="w-[100px] h-screen border-r border-[#d9d9d9]"></div>
                <div className="w-[100px] h-screen border-r border-[#d9d9d9]"></div>
                <div className="w-[100px] h-screen border-r border-[#d9d9d9]"></div>
                <div className="w-[100px] h-screen border-r border-[#d9d9d9]"></div>
              </div>

              {/* Routes */}
              <div className="relative z-10">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/add-quiz" element={<Dashboard />} />
                  <Route path="/manage-quiz" element={<Dashboard />} />
                  <Route exact path="/view-quiz/:id" element={<Dashboard />} />
                  <Route path="/manage-feedbacks" element={<Dashboard />} />
                  <Route path="/view-data/:id" element={<Dashboard />} />
                  <Route path="/system-feedbacks" element={<Dashboard />} />
                  <Route path="/update-quiz/:id" element={<Dashboard />} />
                  <Route path="*" element={<Dashboard />} />
                </Routes>
              </div>
            </div>
          </div>

        </div>
      </ div>
    </>
  );
}


export default PatientDashboard;
