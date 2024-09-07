import React, { useState } from 'react';
import Navbar from '../components/navbar';

const RegisterHospital = () => {
  // Define state for form fields
  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalType: '',
    phoneNumber: '',
    registrationNumber: '',
    hospitalWebsite: '',
    adminName: '',
    hospitalState: '',
    hospitalCity: '',
    hospitalAddress: '',
    email: '',
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
    
    try {
      const response = await fetch('http://localhost:5000/api/hospitals/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Hospital registered successfully!');
        setFormData({  // Reset form data
          hospitalName: '',
          hospitalType: '',
          phoneNumber: '',
          registrationNumber: '',
          hospitalWebsite: '',
          adminName: '',
          hospitalState: '',
          hospitalCity: '',
          hospitalAddress: '',
          email: '',
          password: ''
        });
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.message);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <>
      <div className='bg-background h-screen'>
        <Navbar />
        <div className="container mt-10 mx-auto  bg-white rounded-2xl p-6">
          <h1 className="text-primary text-3xl font-semibold mb-8">Register Hospital</h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-secondary mb-2">Hospital Name</label>
              <input
                type="text"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Hospital Name"
              />
            </div>
            <div>
              <label className="block text-secondary mb-2">Hospital Type</label>
              <select
                name="hospitalType"
                value={formData.hospitalType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option selected disabled>Select Hospital Type</option>
                <option value="Government">Government</option>
                <option value="Private">Private</option>
              </select>
            </div>
            <div>
              <label className="block text-secondary mb-2">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Phone Number"
              />
            </div>
            <div>
              <label className="block text-secondary mb-2">Registration Number</label>
              <input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Registration Number"
              />
            </div>
            <div>
              <label className="block text-secondary mb-2">Hospital Website</label>
              <input
                type="text"
                name="hospitalWebsite"
                value={formData.hospitalWebsite}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Hospital Website"
              />
            </div>
            <div>
              <label className="block text-secondary mb-2">Hospital Admin Full Name</label>
              <input
                type="text"
                name="adminName"
                value={formData.adminName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Admin Name"
              />
            </div>
            <div>
              <label className="block text-secondary mb-2">Hospital State</label>
              <select
                name="hospitalState"
                value={formData.hospitalState}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option selected disabled>Select State</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>
            <div>
              <label className="block text-secondary mb-2">Hospital City</label>
              <select
                name="hospitalCity"
                value={formData.hospitalCity}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option selected disabled>Select City</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Surat">Surat</option>
                <option value="Ahmadabad">Ahmadabad</option>
              </select>
            </div>
            <div className="lg:col-span-4">
              <label className="block text-secondary mb-2">Hospital Address</label>
              <textarea
                name="hospitalAddress"
                value={formData.hospitalAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Hospital Address"
                rows="4"
              ></textarea>
            </div>
            <div>
              <label className="block text-secondary mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label className="block text-secondary mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Password"
              />
            </div>
            <div className='h-full flex items-end'>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-semibold rounded-2xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterHospital;
