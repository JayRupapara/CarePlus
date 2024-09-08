// import React from 'react';
import { FaUserDoctor, FaBed, FaUsers } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div>

            <div className='text-end mt-5'>
                <Link to={"../register-patient"} className='mt-6 px-2 py-3 mr-4  text-white bg-primary rounded-xl ' >Register Patient</Link>
                <Link className='mt-6 px-2 py-3   text-primary border-primary border rounded-xl '>New Appointment</Link>
            </div>
            <br/><br/>

            {/* Top Section: Doctor, Bed, Patient, Queue Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

                {/* Doctors Stat */}
                <div className="rounded-2xl transition-all hover:bg-background p-6 text-center">
                    <div className="flex justify-center mb-3"><FaUserDoctor className='text-center text-5xl text-primary' /></div>
                    <h3 className="text-2xl font-semibold mb-2">Doctors</h3>
                    <p className="text-xl text-gray-500">Available Doctors - <span className="text-red-500">9</span></p>
                    <p className="text-xl text-gray-500">Total Doctors - 25</p>
                </div>

                {/* Bed Stat */}
                <div className="rounded-2xl transition-all hover:bg-background p-6 text-center">
                    <div className="flex justify-center mb-3"><FaBed className='text-center text-5xl text-primary' /></div>
                    <h3 className="text-2xl font-semibold mb-2">Bed</h3>
                    <p className="text-xl text-gray-500">Remain Bed - <span className="text-red-500">47</span></p>
                    <p className="text-xl text-gray-500">Total Bed - 100</p>
                </div>

                {/* Patients Stat */}
                <div className="rounded-2xl transition-all hover:bg-background p-6 text-center">
                    <div className="flex justify-center mb-3"><FaUsers className='text-center text-5xl text-primary' /></div>
                    <h3 className="text-2xl font-semibold mb-2">Patients</h3>
                    <p className="text-xl text-gray-500">Visited - <span className="text-red-500">9</span></p>
                    <p className="text-xl text-gray-500">Total Qued - 21</p>
                </div>

                {/* Doctors Stat */}
                <div className="rounded-2xl transition-all hover:bg-background p-6 text-center">
                    <div className="flex justify-center mb-3"><FaUserDoctor className='text-center text-5xl text-primary' /></div>
                    <h3 className="text-2xl font-semibold mb-2">Doctors</h3>
                    <p className="text-xl text-gray-500">Available Doctors - <span className="text-red-500">9</span></p>
                    <p className="text-xl text-gray-500">Total Doctors - 25</p>
                </div>
            </div>

            {/* Bottom Section: Recently Registered Patients and Waiting Queue */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Recently Registered Patients */}
                <div className="bg-white rounded-2xl p-6">
                    <h3 className="text-2xl text-primary font-semibold mb-4">Recently Registered Patients</h3>
                    <table className="w-full table-auto text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-4 text-gray-600 font-medium">#</th>
                                <th className="p-4 text-gray-600 font-medium">Patient Name</th>
                                <th className="p-4 text-gray-600 font-medium">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4">01</td>
                                <td className="p-4">Jeel Patel</td>
                                <td className="p-4">04-09-2024</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">02</td>
                                <td className="p-4">Krish Lalani</td>
                                <td className="p-4">06-08-2024</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">03</td>
                                <td className="p-4">Raj Patel</td>
                                <td className="p-4">20-07-2023</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="mt-6 px-4 py-2  text-primary border-primary border rounded-xl">See More</button>
                </div>

                {/* Waiting Queue */}
                <div className="bg-white p-6">
                    <h3 className="text-2xl text-primary font-semibold mb-4">Waiting Queue</h3>
                    <table className="w-full table-auto text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-4 text-gray-600 font-medium">#</th>
                                <th className="p-4 text-gray-600 font-medium">Patient Name</th>
                                <th className="p-4 text-gray-600 font-medium">Doctor Name</th>
                                <th className="p-4 text-gray-600 font-medium">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4">01</td>
                                <td className="p-4">Jeel Patel</td>
                                <td className="p-4">Dr. Rajani</td>
                                <td className="p-4">04-09-2024</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">02</td>
                                <td className="p-4">Krish Lalani</td>
                                <td className="p-4">Dr. Chikani</td>
                                <td className="p-4">06-08-2024</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">03</td>
                                <td className="p-4">Raj Patel</td>
                                <td className="p-4">Dr. Chikani</td>
                                <td className="p-4">20-07-2023</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="mt-6 px-4 py-2  text-primary border-primary border rounded-xl ">See More</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
