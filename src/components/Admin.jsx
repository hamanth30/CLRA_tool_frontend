import React, { useState } from 'react';
import VistaLogo from '../assets/vista_logo.png';
import logo from '../assets/image.png';

const Admin = () => {
  const [query, setQuery] = useState('');
  const [companies, setCompanies] = useState([
    // Placeholder. Replace this with JSON data you'll send later.
    { name: 'Vista Technologies' },
    { name: 'TechNova Solutions' },
    { name: 'GreenField Corp' },
    { name: 'Visionary Labs' },
    { name: 'Vertex Innovations' }
  ]);

  const tasks = [
    'Annotation tasks: License Documents',
    'Annotation tasks: Bills Documents'
  ];

  const [showCalendar, setShowCalendar] = useState(false);
  const [deadline, setDeadline] = useState('');
  const [tempDeadline, setTempDeadline] = useState('');


  const filteredCompanies = companies.filter((company) =>
    new RegExp(query, 'i').test(company.name)
  );

  return (
    <div className="bg-gray-300 min-h-screen">
      {/* Logos */}
      <div className="flex flex-row items-center p-5">
        <img src={logo} alt="logo" style={{ maxWidth: '100px' }} />
        <img
          src={VistaLogo}
          alt="Vista_logo"
          style={{ maxWidth: '200px', marginLeft: '20px' }}
        />
      </div>

      {/* Admin Heading */}
      <div className="text-center mt-2 text-3xl font-bold text-teal-700">
        Admin Page
      </div>

      {/* Search Box */}
      <div className="flex flex-col items-center mt-10">
     <div className="flex items-center gap-4 mt-6">
  {/* Search Input */}
  <input
    type="text"
    placeholder="Search for a vendor..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="w-96 p-3 rounded-lg shadow-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
  />

  {/* Set Deadline Button */}
  <button
    onClick={() => setShowCalendar(!showCalendar)}
    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow"
  >
    Set Deadline
  </button>

  

  {/* Calendar + OK button */}
  {showCalendar && (
    <div className="flex items-center gap-2">
      <input
        type="datetime-local"
        value={tempDeadline}
        onChange={(e) => setTempDeadline(e.target.value)}
        className="p-2 border border-gray-400 rounded shadow bg-white"
      />
      <button
        onClick={() => {
          setDeadline(tempDeadline);
          setShowCalendar(false);
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"
      >
        OK
      </button>
    </div>
  )}

  {/* Display fixed deadline */}
  {deadline && !showCalendar && (
    <div className="text-gray-700 font-medium">
      Fixed deadline: {new Date(deadline).toLocaleString()}
    </div>
  )}


</div>


        {/* Dropdown Suggestions */}
        {query && (
          <div className="w-96 mt-2 bg-white rounded-lg shadow-md max-h-60 overflow-y-auto">
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company, index) => (
                <div
                  key={index}
                  className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                  onClick={() => {
                    setQuery(company.name);
                  }}
                >
                  {company.name}
                </div>
              ))
            ) : (
              <div className="p-3 text-gray-500 text-sm">No matching companies found.</div>
            )}
          </div>
        )}
      </div>
      {/* Tasks Table */}
{filteredCompanies.length > 0 && (
  <div className="w-3/4 mt-8 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
    <table className="min-w-full table-auto text-left">
      <thead className="bg-teal-600 text-white">
        <tr>
          <th className="px-6 py-3">Task Name</th>
          <th className="px-6 py-3">Vendor</th>
          <th className="px-6 py-3">Deadline</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index} className="border-t hover:bg-gray-100">
            <td className="px-6 py-3">{task}</td>
            <td className="px-6 py-3">{query}</td>
            <td className="px-6 py-3">
              {deadline ? new Date(deadline).toLocaleString() : 'Not set'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Assign Button */}
    <div className="flex items-center justify-center p-4">
      <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-2 rounded-lg shadow">
        Assign All Tasks
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Admin;
 