import { useState, useEffect } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { Route, Routes, useNavigate } from 'react-router-dom';
import HospitalSidebar from './HospitalSideBar';
import { FaHospital } from "react-icons/fa6";
import Dashboard from "../../pages/hospital/Dashboard.jsx";
import Doctors from '../../pages/hospital/Doctors';
import RegisterNewPatient from '../../pages/hospital/RegisterNewPatient';
import { parseJwt } from '../../models/JwtDecode';
import toast, { Toaster } from 'react-hot-toast';


function HospitalDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [UserName, setUserName] = useState("Raj Hospital");
  const [UserId, setUserId] = useState(null);
  const navigate = useNavigate();


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleAuthUser = async () => {

    if (localStorage.getItem("HospitalToken")) {
      const token = localStorage.getItem("HospitalToken");
      const parse = parseJwt(token);
      // console.log(parse);

      if (parse.role == "hospital") {
        setUserId(parse.id);
      

      }
      else {
        toast.error("Invalid User! Login Again..");
        navigate("/");
      }
    }
    else {
      navigate("/");
    }
  }


  useEffect(() => {
    handleAuthUser();
    if (screen.width < 960) {
      setSidebarOpen(false)
    }
  }, [navigate])



  return (
    <>
      <div className='grid text-secondary bg-background grid-cols-6'>

        <div className={`sm:col-span-1 col-span-3 ${sidebarOpen ? 'block' : 'hidden'}`}>
          <HospitalSidebar />
        </div>

        <div className={`${sidebarOpen ? 'sm:col-span-5 col-span-3 ' : ' sm:col-span-6 col-span-6'}  h-screen overflow-y-auto  overflow-x-hidden`}>

          <div className='z-10  text-secondary flex justify-between items-center py-4 px-4 w-full  bg-white'>
            <div className='flex justify-center  items-center sm:gap-10 gap-5'>
              <FaBarsStaggered className='text-xl cursor-pointer ' onClick={toggleSidebar} />
              <h2 className='font-semibold  sm:text-2xl text-lg'>
                <Routes>
                  <Route path='/dashboard' element={'Dashboard'}></Route>
                  <Route path='/doctors' element={'Manage Doctors'}></Route>
                  <Route path='/register-patient' element={'Register Patient'}></Route>
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
                <p className=''>150 Ft. Ring Road Rajkot</p>
              </div>

              <div className='p-2 sm:text-2xl text-lg bg-white text-primary rounded-full'><FaHospital /></div>
            </div>
          </div>

          <div className='px-3'>
            <div className='p-5 mt-2  bg-white rounded-xl'>
              <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/doctors' element={<Doctors />}></Route>
                <Route path='/register-patient' element={<RegisterNewPatient />}></Route>
                <Route exact path='/view-quiz/:id' element={'Dashboard'}></Route>
                <Route path='/manage-feedbacks' element={'Dashboard'}></Route>
                <Route path='/view-data/:id' element={'Dashboard'}></Route>
                <Route path='/system-feedbacks' element={'Dashboard'}></Route>
                <Route path='/update-quiz/:id' element={'Dashboard'}></Route>
                <Route path='*' element={'Dashboard'}></Route>
              </Routes>
            </div>
          </div>

        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </ div>
    </>
  );
}


export default HospitalDashboard;
