import React, { useState } from 'react';
import Navbar from '../../components/navbar';

const RegisterNewPatient = () => {
    // Define state for form fields
    const [formData, setFormData] = useState({
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
            const response = await fetch('http://localhost:5000/api/patients/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Patient registered successfully!');
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

            <div className=" rounded-2xl">
                {/* Grid Layout with 4 Columns on Large Screens */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Patient Name */}
                    <div>
                        <label className="block text-secondary mb-2">Patient Full Name</label>
                        <input
                            type="text"
                            name="patientName"
                            value={formData.patientName}
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
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option selected disabled>Select Gender</option>
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
                            name="abhaCardNumber"
                            value={formData.abhaCardNumber}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Enter ABHA Card Number"
                        />
                    </div>

                    {/* Emergency Phone Number */}
                    <div>
                        <label className="block text-secondary mb-2">Emergency Phone Number</label>
                        <input
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
                            type="text"
                            name="emergencyContactName"
                            value={formData.emergencyContactName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Enter Emergency Contact Name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-secondary mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Enter Email"
                        />
                    </div>

                    {/* Address */}
                    <div className="lg:col-span-4">
                        <label className="block text-secondary mb-2">Address</label>
                        <textarea
                            name="address"
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
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option selected disabled>Select City</option>
                            <option value="Rajkot">Rajkot</option>
                            <option value="Surat">Surat</option>
                            <option value="Ahmadabad">Ahmadabad</option>
                        </select>
                    </div>

                    {/* State */}
                    <div>
                        <label className="block text-secondary mb-2">State</label>
                        <select
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option selected disabled>Select State</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Delhi">Delhi</option>
                        </select>
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

        </>
    );
};

export default RegisterNewPatient;
