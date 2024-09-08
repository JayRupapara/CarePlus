import { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

const Dashboard = () => {
  // Define state to toggle between Digital and Page views
  const [isPageView, setIsPageView] = useState(false);

  // State for dynamically adding medicines, initialized from localStorage
  const [medicines, setMedicines] = useState(() => {
    const savedMedicines = localStorage.getItem('medicines');
    return savedMedicines ? JSON.parse(savedMedicines) : [];
  });

  // Save medicines to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('medicines', JSON.stringify(medicines));
  }, [medicines]);

  // Handler for adding new medicine
  const addMedicine = () => {
    setMedicines([
      ...medicines,
      { id: medicines.length + 1, name: '', quantity: '', timing: { morning: false, afternoon: false, evening: false } }
    ]);
  };

  // Handler for changing medicine input fields
  const handleMedicineChange = (index, field, value) => {
    const newMedicines = [...medicines];
    if (field === 'timing') {
      // For checkbox handling (timing)
      newMedicines[index].timing[value] = !newMedicines[index].timing[value];
    } else {
      newMedicines[index][field] = value;
    }
    setMedicines(newMedicines);
  };

  // Handler for deleting a medicine
  const deleteMedicine = (index) => {
    const newMedicines = medicines.filter((_, i) => i !== index);
    setMedicines(newMedicines);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dr. Raghav Patel</h1>
          <p className="text-sm text-gray-600">M.B.B.S, M.D</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Sign Out</button>
        </div>
      </div>

      {/* Date Section */}
      <div className="mt-6 bg-white flex justify-between items-center p-4 rounded-lg">
        <p className="text-gray-800">Today: 4 Sep 2024 | 09:47:98 PM</p>
        <div className="flex items-center bg-gray-100 p-2 rounded-full gap-2">
          <button
            className={`px-3 py-1 rounded-full ${!isPageView ? 'bg-gray-400' : 'bg-gray-200'}`}
            onClick={() => setIsPageView(false)}
          >
            Digital
          </button>
          <button
            className={`px-3 py-1 rounded-full ${isPageView ? 'bg-gray-400' : 'bg-gray-200'}`}
            onClick={() => setIsPageView(true)}
          >
            Page
          </button>
        </div>
      </div>

      {/* Conditional Rendering based on isPageView */}
      {isPageView ? (
        // Simplified view for "Page" mode
        <div className="mt-6 bg-white p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Jeel Patel</h2>
          <p className="text-gray-600">Age: 20</p>
          <p className="text-gray-600">Weight: 55 kg</p>
          <p className="text-gray-600">Address: Charusat University, Changa.</p>
          <div className="flex justify-end mt-6">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg">Submit</button>
          </div>
        </div>
      ) : (
        // Detailed view for "Digital" mode
        <div className="mt-6 bg-white p-6 rounded-lg">
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
                  <th className="p-3 text-left">Timing</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {medicines.map((medicine, index) => (
                  <tr key={medicine.id} className="border-t">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">
                      <input
                        type="text"
                        className="border p-2 rounded-lg w-full"
                        placeholder="Medicine Name"
                        value={medicine.name}
                        onChange={(e) => handleMedicineChange(index, 'name', e.target.value)}
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        className="border p-2 rounded-lg w-full"
                        placeholder="Quantity"
                        value={medicine.quantity}
                        onChange={(e) => handleMedicineChange(index, 'quantity', e.target.value)}
                      />
                    </td>
                    <td className="p-3 flex gap-2">
                      <label>
                        <input
                          type="checkbox"
                          checked={medicine.timing.morning}
                          onChange={() => handleMedicineChange(index, 'timing', 'morning')}
                        /> Morning
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          checked={medicine.timing.afternoon}
                          onChange={() => handleMedicineChange(index, 'timing', 'afternoon')}
                        /> Afternoon
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          checked={medicine.timing.evening}
                          onChange={() => handleMedicineChange(index, 'timing', 'evening')}
                        /> Evening
                      </label>
                    </td>
                    <td className="p-3">
                      <button onClick={() => deleteMedicine(index)} className="text-red-500">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Add more button */}
            <div className="flex justify-start mt-4">
              <button onClick={addMedicine} className="bg-gray-100 px-4 py-2 rounded-lg">
                + Add more
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
