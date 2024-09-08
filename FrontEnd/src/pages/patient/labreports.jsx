import React from 'react';

const appointments = () => {
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
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Main Container */}
        <h2 className="text-2xl font-semibold mb-4 text-center">Lab Report History</h2>
      <div className="Main bg-white rounded-2xl shadow border border-gray-50 p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr>
                <th className="border-b px-4 py-2 text-left">#</th>
                <th className="border-b px-4 py-2 text-left">Laboratory Name</th>
                <th className="border-b px-4 py-2 text-left">Report For</th>
                <th className="border-b px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {appointmentData.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="px-4 py-2">{appointment.id}</td>
                  <td className="px-4 py-2">{appointment.laboratory}</td>
                  <td className="px-4 py-2">{appointment.report}</td>
                  <td className="px-4 py-2">{appointment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default appointments;
