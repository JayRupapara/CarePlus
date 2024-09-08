import React from 'react';

const LabReports = () => {
  // Sample data based on the image
  const appointmentData = [
    {
      id: 1,
      laboratory: 'Apollo Laboratory',
      report: 'Diabetes',
      date: '04-09-2024',
    },
    {
      id: 2,
      laboratory: 'Starling Laboratory',
      report: 'Blood Pressure',
      date: '06-08-2024',
    },
    {
      id: 3,
      laboratory: 'Unique Tests Lab',
      report: 'Blood Group',
      date: '20-07-2023',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Main Container */}
      <h2 className="text-2xl font-semibold text-red-500 mb-4">Lab Report History</h2>
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-b px-6 py-3 text-left text-gray-600 font-medium">#</th>
                <th className="border-b px-6 py-3 text-left text-gray-600 font-medium">Laboratory Name</th>
                <th className="border-b px-6 py-3 text-left text-gray-600 font-medium">Report For</th>
                <th className="border-b px-6 py-3 text-left text-gray-600 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {appointmentData.map((appointment) => (
                <tr key={appointment.id} className="border-t">
                  <td className="px-6 py-4">{appointment.id}</td>
                  <td className="px-6 py-4">{appointment.laboratory}</td>
                  <td className="px-6 py-4">{appointment.report}</td>
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

export default LabReports;
