import React, { useState, useEffect } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { Route, Routes, useNavigate } from 'react-router-dom';
// import { parseJwt } from '../model/JwtDecode';
import DoctorSidebar from './DoctorSidebar';
import Dashboard from '../../pages/doctor/Dashboard';
import WaitingList from '../../pages/doctor/WaitingList';
import Admitted from '../../pages/doctor/Admitted';


function DoctorDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [UserName, setUserName] = useState("Raj Hospital");
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
          <DoctorSidebar />
        </div>

        <div className={`${sidebarOpen ? 'sm:col-span-5 col-span-3 ' : ' sm:col-span-6 col-span-6'}  h-screen overflow-y-auto  overflow-x-hidden`}>

          <div className='z-10  text-secondary flex justify-between items-center py-4 px-4 w-full  bg-white'>
            <div className='flex justify-center  items-center sm:gap-10 gap-5'>
              <FaBarsStaggered className='text-xl cursor-pointer ' onClick={toggleSidebar} />
              <h2 className='font-semibold  sm:text-2xl text-lg'>
                <Routes>
                  <Route path='/dashboard' element={'Dashboard'}></Route>
                  <Route path='/WaitingList' element={'WaitingList'}></Route>
                  <Route path='/Admitted' element={'Admitted'}></Route>
                  {/* <Route path='/register-patient' element={'Register Patient'}></Route>
                  <Route exact path='/view-quiz/:id' element={'View Quiz'}></Route>
                  <Route path='/view-data/*' element={'View Data'}></Route>
                  <Route path='/manage-feedbacks' element={'Manage Feedbacks'}></Route>
                  <Route path='/system-feedbacks' element={'System Feedbacks'}></Route>
                  <Route path='/update-quiz/*' element={'Update Quiz'}></Route> */}
                  <Route path='*' element={'logout'}></Route>  
                </Routes>
              </h2>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <div className='text-end'>
                <p className='font-medium text-xl'>{UserName}</p>
                <p className=''>150 Ft. Ring Road Rajkot</p>
              </div>

              {/* <div className='p-2 sm:text-2xl text-lg bg-white text-primary rounded-full'><FaHospital /></div> */}
            </div>
          </div>

          <div className='px-3'>
            <div className=' mt-2'>
              <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/WaitingList' element={<WaitingList/>}></Route>
                <Route path='/admitted' element={<Admitted/>}></Route>
                {/* <Route path='/doctors' element={<Doctors/>}></Route> */}
                {/* <Route path='/register-patient' element={<RegisterNewPatient/>}></Route> */}
                {/* <Route exact path='/view-quiz/:id' element={'Dashboard'}></Route>
                <Route path='/manage-feedbacks' element={'Dashboard'}></Route>
                <Route path='/view-data/:id' element={'Dashboard'}></Route>
                <Route path='/system-feedbacks' element={'Dashboard'}></Route>
                <Route path='/update-quiz/:id' element={'Dashboard'}></Route> */}
                {/* <Route path='*' element={'Dashboard'}></Route> */}
              </Routes>
            </div>
          </div>

        </div>
      </ div>
    </>
  );
}


export default DoctorDashboard;
