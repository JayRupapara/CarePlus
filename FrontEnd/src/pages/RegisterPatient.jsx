import React, { useState } from 'react';
import Navbar from '../components/navbar';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RegisterPatient = () => {
  const navigate = useNavigate();
  // Define state for form fields
  const [formData, setFormData] = useState({
    patientName: '',
    dob: '',
    gender: '0',
    phoneNumber: '',
    abhaCardNumber: '',
    emergencyPhoneNumber: '',
    emergencyContactName: '',
    email: '',
    address: '',
    city: '0',
    state: '0',
    bloodGroup: '0',
    password: ''
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.bloodGroup == "0" || formData.city == "0" || formData.state == "0" || formData.gender == "0") {
      toast("Select Dropdown Value", {
        icon: '⚠️',
        style: {
          'borderRadius': '15px'
        }
      });
      return
    }


    try {
      const response = await axios.post(
        'http://'+ import.meta.env.VITE_DB_HOST +'/api/register/register-patient',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.status == 201) {
        toast.success("Patient registered successfully!")
        setFormData({  // Reset form data
          patientName: '',
          dob: '',
          gender: '',
          phoneNumber: '',
          abhaCardNumber: '',
          emergencyPhoneNumber: '',
          emergencyContactName: '',
          email: '',
          address: '',
          city: '',
          state: '',
          bloodGroup: '',
          password: ''
        });
        navigate("/login-hospital")
      } else {  
        toast("Please Fill All the Fields !", {
          icon: '⚠️',
          style: {
            'borderRadius': '15px'
          }
        });

      }
    } catch (error) {
      // console.log(error);
      
      toast.error(error.response.data.error)
    }
  };

  return (
    <>
      <div className='bg-background h-screen'>
        <Navbar />
        <div className="container mt-10 bg-white rounded-2xl mx-auto p-6">
          <h1 className="text-primary text-3xl font-semibold mb-8">Register Patient</h1>

          {/* Grid Layout with 4 Columns on Large Screens */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Patient Name */}
            <div>
              <label className="block text-secondary mb-2">Patient Full Name</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                required
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter Full Patient Name"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-secondary mb-2">Date of Birth (DOB)</label>
              <input
                type="date"
                name="dob"
                required
                value={formData.dob}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-secondary mb-2">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                required
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option selected value="0">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-secondary mb-2">Phone Number</label>
              <input
                type="tel"
                required
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter Phone Number"
              />
            </div>

            {/* ABHA Card Number */}
            <div>
              <label className="block text-secondary mb-2">ABHA Card Number</label>
              <input
                type="text"
                required
                name="abhaCardNumber"
                value={formData.abhaCardNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter ABHA Card Number"
              />
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-secondary mb-2">Blood Group</label>
              <select
              required
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option selected value="0">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>


            {/* Emergency Phone Number */}
            <div>
              <label className="block text-secondary mb-2">Emergency Phone Number</label>
              <input
              required
                type="tel"
                name="emergencyPhoneNumber"
                value={formData.emergencyPhoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter Emergency Phone Number"
              />
            </div>

            {/* Emergency Contact Person Name */}
            <div>
              <label className="block text-secondary mb-2">Emergency Contact Name</label>
              <input
              required
                type="text"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter Emergency Contact Name"
              />
            </div>



            {/* Address */}
            <div className="lg:col-span-4">
              <label className="block text-secondary mb-2">Address</label>
              <textarea
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter Address"
                rows="4"
              ></textarea>
            </div>

            {/* City */}
            <div>
              <label className="block text-secondary mb-2">City</label>
              <select
              required
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option selected value="0">Select City</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Surat">Surat</option>
                <option value="Ahmadabad">Ahmadabad</option>
              </select>
            </div>

            {/* State */}
            <div>
              <label className="block text-secondary mb-2">State</label>
              <select
              required
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option selected value="0">Select State</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-secondary mb-2">Email</label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter Email"
              />
            </div>


            {/* Password */}
            <div>
              <label className="block text-secondary mb-2">Password</label>
              <input
                type="password"
                required
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter Password"
              />
            </div>

            {/* Register Button */}
            <div className='h-full flex items-end'>
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-2xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default RegisterPatient;
