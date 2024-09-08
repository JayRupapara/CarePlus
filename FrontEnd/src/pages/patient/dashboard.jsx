import React from 'react';

const Dashboard = () => {
  return (
    <div className="PersonalDetails w-full ">
      {/* Main Container */}
      <div className="Main bg-white rounded-2xl shadow-md shadow-gray-100 border border-gray-50 p-6 md:flex justify-between">

        {/* Patient Details Section */}
        <div className="PatientsDetails flex flex-col justify-start items-start gap-2 w-">
          <h1 className="text-3xl md:text-2xl font-semibold">John Patel</h1>
          <p className="text-lg md:text-base font-medium">
            Date of Birth (DOB): <span className="font-normal">02-02-2000</span>
          </p>
          <p className="text-lg md:text-base font-medium">
            Age: <span className="font-normal">25</span>
          </p>
          <p className="text-lg md:text-base font-medium">
            Gender: <span className="font-normal">Male</span>
          </p>
          <p className="text-lg md:text-base font-medium">
            Blood Group: <span className="font-normal">O Positive</span>
          </p>
          <p className="text-lg md:text-base font-medium">
            Mobile No.: <span className="font-normal">9925564433</span>
          </p>
          <p className="text-lg md:text-base font-medium">
            Emergency Contact: <span className="font-normal">9923442244</span>
          </p>
          <p className="text-lg md:text-base font-medium">
            Email: <span className="font-normal">jeel.official.24@gmail.com</span>
          </p>
          <p className="text-lg md:text-base font-medium">
            Address: <span className="font-normal">Charusat University, Changa.</span>
          </p>
        </div>

        {/* QR Code Section */}
        <div className="Qr bg-white rounded-2xl shadow-md shadow-gray-100 p-6 flex flex-col items-center">
          <img
            className="w-40 h-40 mb-4"
            src="https://pngimg.com/uploads/qr_code/qr_code_PNG10.png"
            alt="QR Code"
          />
          <p className="text-xl font-medium">Patient Name</p>
          <p className="text-lg font-normal mt-2">2342-6345-4124</p>
        </div>
      </div>

      {/* Full-width Personal Details Tab */}
      <div className="Title bg-primary text-white text-lg font-normal rounded-2xl mt-6 py-2 px-4 w-full text-center">
        Personal Details
      </div>

      {/* Health Information and Appointment History */}
      <div className="Health-Info-Appointments mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Health Information */}
        <div className="HealthInfo bg-white rounded-2xl shadow-md shadow-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-4">Blood Pressure (BP)</h2>
          <p className="text-base font-medium">
            Systolic Pressure (mmHg): <span className="font-normal">80</span>
          </p>
          <p className="text-base font-medium">
            Diastolic Pressure (mmHg): <span className="font-normal">120</span>
          </p>
          <h2 className="text-lg font-semibold mt-4 mb-2">Heart Rate (Pulse)</h2>
          <p className="text-base font-medium">
            Beats Per Minute (BPM): <span className="font-normal">72</span>
          </p>
        </div>

        {/* Appointment History */}
        <div className="AppointmentHistory bg-white rounded-2xl shadow-md shadow-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
          <p className="text-base font-medium">
            Doctor Name | Time: <span className="font-normal">10:40AM</span>
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">Past Appointments</h2>
          <p className="text-base font-medium">
            Hospital Name | Doctor Name | <span className="font-normal">05-09-2024</span>
          </p>
          <p className="text-base font-medium">
            Hospital Name | Doctor Name | <span className="font-normal">05-09-2024</span>
          </p>
        </div>
      </div>

      {/* Doctor's Notes and Prescriptions Section */}
      <div className="DoctorsNotes mt-6 bg-white rounded-2xl shadow-md shadow-gray-100 p-6 flex flex-col">
        <div className="w-full flex gap-4">
          <img
            className="w-12 h-12 mb-2 inline-block"
            src="https://via.placeholder.com/48"
            alt="Doctor's Notes Icon"
          />
          <h2 className="text-lg font-semibold">Doctor's Notes and Prescriptions</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
