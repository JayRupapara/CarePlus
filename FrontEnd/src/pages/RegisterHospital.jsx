import React from 'react'
import Navbar from '../components/navbar'

const RegisterHospital = () => {
  return (
    <>  
    <div className='bg-background h-screen'>    
        <Navbar/>
        <div className="container mt-10 mx-auto bg-background  p-4">

          <h1 className="text-primary text-3xl font-semibold mb-8">Register Hospital</h1>

          <form className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6">
            {/* Hospital Name */}
            <div>
              <label className="block text-xl text-gray-800 mb-2">Hospital Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Hospital Name"
              />
            </div>

            {/* Hospital Type */}
            <div>
              <label className="block text-xl text-gray-800 mb-2">Hospital Type</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Hospital Type"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xl text-gray-800 mb-2">Phone Number</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Phone Number"
              />
            </div>

            {/* Registration Number */}
            <div>
              <label className="block text-xl text-gray-800 mb-2">Registration Number</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Registration Number"
              />
            </div>

            {/* Hospital Website */}
            <div>
              <label className="block text-xl text-gray-800 mb-2">Hospital Website</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Hospital Website"
              />
            </div>

            {/* Admin Name */}
            <div>
              <label className="block text-xl text-gray-800 mb-2">Hospital Admin Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Admin Name"
              />
            </div>

            {/* Hospital State */}
            <div>
              <label className="block text-xl text-gray-800 mb-2">Hospital State</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter State"
              />
            </div>

            {/* Hospital City */}
            <div>
              <label className="block text-xl text-gray-800 mb-2">Hospital City</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter City"
              />
            </div>

            {/* Address */}
            <div className="lg:col-span-4">
              <label className="block text-xl text-gray-800 mb-2">Hospital Address</label>
              <textarea
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Hospital Address"
                rows="4"
              ></textarea>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xl text-gray-800 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xl text-gray-800 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter Password"
              />
            </div>

            {/* Register Button */}
            <div className='h-full flex items-end'>
              <button
                type="submit"
                className="px-6 py-3  bg-red-500 text-white font-semibold text-xl rounded-2xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Register
              </button>
            </div>

          </form>
        </div>
        </div>
    </>
  )
}

export default RegisterHospital
