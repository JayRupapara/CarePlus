import React from 'react';

const Appointments = () => {
  // Sample data based on the image
  const appointmentData = [
    {
      id: 1,
      hospital: 'Apollo Hospital',
      doctor: 'Dr. Makdi',
      date: '04-09-2024',
    },
    {
      id: 2,
      hospital: 'Starling Hospital',
      doctor: 'Dr. Satis',
      date: '06-08-2024',
    },
    {
      id: 3,
      hospital: 'Walk Heart Hospital',
      doctor: 'Dr. Chovatiya',
      date: '20-07-2023',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Main Container */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Your Appointment History</h2>
      <div className="Main bg-white rounded-2xl shadow border border-gray-50 p-6">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-b px-6 py-3 text-left text-gray-600 font-medium">#</th>
                <th className="border-b px-6 py-3 text-left text-gray-600 font-medium">Patient Name</th>
                <th className="border-b px-6 py-3 text-left text-gray-600 font-medium">Doctor Name</th>
                <th className="border-b px-6 py-3 text-left text-gray-600 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {appointmentData.map((appointment) => (
                <tr key={appointment.id} className="border-t">
                  <td className="px-6 py-4">{appointment.id}</td>
                  <td className="px-6 py-4">{appointment.hospital}</td>
                  <td className="px-6 py-4">{appointment.doctor}</td>
                  <td className="px-6 py-4">{appointment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center">
          <button className="border border-red-400 text-red-500 px-4 py-2 rounded-lg hover:bg-red-50">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
