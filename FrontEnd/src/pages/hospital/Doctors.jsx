import { useState, useEffect } from 'react';
import axios from 'axios';

const Doctors = () => {
    // Form input fields
    const [doctorName, setDoctorName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [specialistFor, setSpecialistFor] = useState('');
    const [education, setEducation] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // List of doctors fetched from API
    const [doctors, setDoctors] = useState([]);
    

    // Fetch doctors data from the API when the component mounts
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('/api/doctors'); // Change URL to your API endpoint
                setDoctors(response.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    // Form submission handler to add a new doctor
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newDoctor = {
            name: doctorName,
            phone: phoneNumber,
            specialist: specialistFor,
            education: education,
            email: email,
            password: password,
            status: 'Available', // Default value
            appointments: 0, // Default value
        };

        try {
            const response = await axios.post('/api/doctors', newDoctor); // Change URL to your API endpoint
            // Add new doctor to the current state
            setDoctors([...doctors, response.data]);

            // Clear the input fields
            setDoctorName('');
            setPhoneNumber('');
            setSpecialistFor('');
            setEducation('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error adding new doctor:', error);
        }
    };

    return (
        <div>
            {/* Add New Doctor Form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div>
                    <label className="block text-secondary mb-2">Doctor Name</label>
                    <input
                        type="text"
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter Doctor Name"
                        required
                    />
                </div>

                <div>
                    <label className="block text-secondary mb-2">Phone Number</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter Phone Number"
                        required
                    />
                </div>

                <div>
                    <label className="block text-secondary mb-2">Specialist for</label>
                    <input
                        type="text"
                        value={specialistFor}
                        onChange={(e) => setSpecialistFor(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Specialized in"
                        required
                    />
                </div>

                <div>
                    <label className="block text-secondary mb-2">Education</label>
                    <input
                        type="text"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Doctor's Education"
                        required
                    />
                </div>

                <div>
                    <label className="block text-secondary mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter Email"
                        required
                    />
                </div>

                <div>
                    <label className="block text-secondary mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter Password"
                        required
                    />
                </div>

                <div className='h-full flex items-end'>
                    <button
                        type="submit"
                        className="px-8 py-3 bg-primary text-white font-semibold rounded-2xl "
                    >
                        Add Doctor
                    </button>
                </div>
            </form>

            {/* Doctor List */}
            <div>
                <h2 className="text-xl mb-4">Available Doctors - 10 | Total Doctors - 25</h2>
                {doctors.length === 0 ? (
                    <p className="text-red-500">No doctors added yet.</p>
                ) : (
                    <table className="w-full table-auto rounded-2xl text-left border-collapse">
                        <thead className='rounded-2xl'>
                            <tr className="bg-background rounded-2xl">
                                <th className="p-4 text-gray-600 font-medium">#</th>
                                <th className="p-4 text-gray-600 font-medium">Doctor Name</th>
                                <th className="p-4 text-gray-600 font-medium">Specialist for</th>
                                <th className="p-4 text-gray-600 font-medium">Status</th>
                                <th className="p-4 text-gray-600 font-medium">Appointments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map && ((doctor, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-4">{index + 1}</td>
                                    <td className="p-4">{doctor.name}</td>
                                    <td className="p-4">{doctor.specialist}</td>
                                    <td className={`p-4 ${doctor.status === 'Available' ? 'text-red-500' : ''}`}>
                                        {doctor.status}
                                    </td>
                                    <td className="p-4">{doctor.appointments}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Doctors;
