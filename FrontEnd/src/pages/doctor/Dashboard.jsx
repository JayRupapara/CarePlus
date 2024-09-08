// import React from 'react'

const Dashboard = () => {
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

      {/* Date Section */}
      <div className="mt-6 bg-white flex justify-between items-center shadow p-4 rounded-lg">
        <p className="text-gray-800">Today: 4 Sep 2024 | 09:47:98 PM</p>
        <div className="flex items-center bg-gray-100 p-2 rounded-lg gap-2">
            <button className="bg-gray-200 px-3 py-1 rounded-full">Digital</button>
            <button className="bg-gray-200 px-3 py-1 rounded-full">Page</button>
          </div>
      </div>

      {/* Patient Information Section */}
      <div className="mt-6 bg-white shadow p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800">Jeel Patel</h2>
        <p className="text-gray-600">Age: 20</p>
        <p className="text-gray-600">Weight: 55 kg</p>
        <p className="text-gray-600">Address: Charusat University, Changa.</p>

      {/* Medicine Table Section */}
      <div className="mt-6 bg-white p-4 rounded-lg">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Medicine Name</th>
              <th className="p-3 text-left">Buy Quantity</th>
              <th className="p-3 text-left">Timing / Quantity</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="border-t">
              <td className="p-3">01</td>
              <td className="p-3">Amoxicillin</td>
              <td className="p-3">10</td>
              <td className="p-3">Morning Afternoon Evening</td>
            </tr>
            {/* Row 2 */}
            <tr className="border-t">
              <td className="p-3">02</td>
              <td className="p-3">Loratadine</td>
              <td className="p-3">20</td>
              <td className="p-3">Morning Afternoon Evening</td>
            </tr>
            {/* Row 3 */}
            <tr className="border-t">
              <td className="p-3">03</td>
              <td className="p-3">Hydrocortisone Creams</td>
              <td className="p-3">5</td>
              <td className="p-3">Morning Afternoon Evening</td>
            </tr>
            {/* Row 4 */}
            <tr className="border-t">
              <td className="p-3">04</td>
              <td className="p-3">Dextromethorphan</td>
              <td className="p-3">10</td>
              <td className="p-3">Morning Afternoon Evening</td>
            </tr>
          </tbody>
        </table>

        {/* Add more button */}
        <div className="flex justify-start mt-4">
          <button className="bg-gray-100 px-4 py-2 rounded-lg shadow">+ Add more</button>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-6">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg">Submit</button>
      </div>
    </div>
      </div>
  )
}

export default Dashboard;
