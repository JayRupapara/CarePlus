import { StrictMode } from 'react' 
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx';
import RegisterHospital from './pages/RegisterHospital.jsx';
import HospitalDashboard from './dashbaords/hospital/HospitalDashboard.jsx';
import Error404 from './pages/Error404.jsx';
import PatientDashboard from './dashbaords/patient/PatientDashboard.jsx';
import LoginPatient from './pages/LoginPatient.jsx';
import LoginHospital from './pages/LoginHospital.jsx';
import RegisterPatient from './pages/RegisterPatient.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/", 
        element: <Home />,
      },
      {
        path: "/contact", 
        element: <Contact />,
      },
      {
        path: "/about", 
        element: <About />,
      },
      {
        path: "/register-hospital",
        element:<RegisterHospital/>    
      },
      {
        path: "/register-patient",
        element:<RegisterPatient/>    
      },
      {
        path: "/login-patient",
        element:<LoginPatient/>    
      },
      {
        path: "/login-hospital",
        element:<LoginHospital/>    
      },
      {
        path: "/hospital/*",
        element:<HospitalDashboard/>    
      },
      {
        path: "/patient/*",
        element:<PatientDashboard/>    
      },
      {
        path: "*",
        element: <Error404 />
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
