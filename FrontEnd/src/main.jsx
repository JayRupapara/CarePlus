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
        path: "/register-hospital",
        element:<RegisterHospital/>    
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
