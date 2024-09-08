// import React from 'react';

const Appointments = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-2">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white shadow p-4 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dr. Raghav Patel</h1>
          <p className="text-sm text-gray-600">M.B.B.S, M.D</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Sign Out</button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-6 bg-white shadow p-4 rounded-lg flex justify-between items-center text-center">
        <div className="w-1/2 border-r-2">
          <p className="text-gray-700">Completed Appointments</p>
          <p className="text-red-500 text-2xl font-bold">9</p>
        </div>
        <div className="w-1/2">
          <p className="text-gray-700">Total Appointments</p>
          <p className="text-red-500 text-2xl font-bold">25</p>
        </div>
      </div>

      {/* Patient List Table */}
      <div className="mt-6 bg-white shadow p-4 rounded-lg overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Patient Name</th>
              <th className="p-3 text-left">Gender</th>
              <th className="p-3 text-left">Appointment Time</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="border-t">
              <td className="p-3">01</td>
              <td className="p-3">Jeel Patel</td>
              <td className="p-3">Male</td>
              <td className="p-3">04-09-2024</td>
            </tr>
            {/* Row 2 */}
            <tr className="border-t">
              <td className="p-3">02</td>
              <td className="p-3">Krish Lalani</td>
              <td className="p-3">Male</td>
              <td className="p-3">03-09-2024</td>
            </tr>
            {/* Row 3 */}
            <tr className="border-t">
              <td className="p-3">03</td>
              <td className="p-3">Raj Patel</td>
              <td className="p-3">Male</td>
              <td className="p-3">04-09-2024</td>
            </tr>
            {/* Row 4 */}
            <tr className="border-t">
              <td className="p-3">04</td>
              <td className="p-3">Jay Ruparpa</td>
              <td className="p-3">Male</td>
              <td className="p-3">04-09-2024</td>
            </tr>
            {/* Row 5 */}
            <tr className="border-t">
              <td className="p-3">05</td>
              <td className="p-3">Diya Patel</td>
              <td className="p-3">Female</td>
              <td className="p-3">04-09-2024</td>
            </tr>
            {/* Row 6 */}
            <tr className="border-t">
              <td className="p-3">06</td>
              <td className="p-3">Nidhi Modi</td>
              <td className="p-3">Female</td>
              <td className="p-3">04-09-2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
