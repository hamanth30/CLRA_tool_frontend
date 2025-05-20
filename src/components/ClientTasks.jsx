import React, { useRef, useState } from 'react';
import VistaLogo from '../assets/vista_logo.png';
import logo from '../assets/image.png';
import { MdDriveFolderUpload } from 'react-icons/md';

const ClientTasks = () => {
  const fileInputs = useRef([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const tasks = [
    'Annotation tasks: License Documents',
    'Annotation tasks: Bills Documents'
  ];

  const handleUploadClick = (index) => {
    if (fileInputs.current[index]) {
      fileInputs.current[index].click();
    }
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      const updatedFiles = [...uploadedFiles];
      updatedFiles[index] = { file, url: fileURL };
      setUploadedFiles(updatedFiles);
    }
  };

  const handleViewFile = (index) => {
    const fileData = uploadedFiles[index];
    if (fileData?.url) {
      window.open(fileData.url, '_blank');
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      {/* Logos */}
      <div className="flex flex-row items-center p-5">
        <img src={logo} alt="logo" style={{ maxWidth: '100px' }} />
        <img src={VistaLogo} alt="Vista_logo" style={{ maxWidth: '200px', marginLeft: '20px' }} />
      </div>

      {/* Heading */}
      <div className="text-center mt-2 text-3xl font-bold text-teal-700">
        <h1>Assigned Tasks to the client</h1>
        <p className="text-lg text-gray-600 mt-4">Documents to be submitted by the client</p>
        <p className="text-lg text-gray-600 mt-1">Click the upload icon to add documents</p>
        <p className="text-lg text-red-500 mt-1">Note: Please upload the documents before deadline</p>
      </div>

      {/* Table */}
      <div className="w-[900px] mx-auto mt-10">
        <table className="w-full bg-white border border-black">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-black p-3 text-left">Tasks</th>
              <th className="border border-black p-3 text-center">Submission Status</th>
              <th className="border border-black p-3 text-center">Upload Documents</th>
               <th className="border border-black p-3 text-center">Audit Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className="border border-black p-3">{task}</td>
                <td className="border border-black p-3 text-center text-green-700 font-semibold">
                  Completed
                </td>
                <td className="border border-black p-3 text-center">
  <div className="flex items-center justify-center gap-3">
    <MdDriveFolderUpload
      className="text-2xl text-blue-600 cursor-pointer hover:text-blue-800"
      onClick={() => handleUploadClick(index)}
    />
    <input
      type="file"
      ref={(el) => (fileInputs.current[index] = el)}
      className="hidden"
      onChange={(e) => handleFileChange(e, index)}
      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
    />
    {uploadedFiles[index]?.file && (
      <button
        onClick={() => handleViewFile(index)}
        className="text-sm text-black bg-white px-2 py-1 rounded transition duration-150 hover:text-blue-600 hover:underline"
      >
        View
      </button>
    )}
  </div>
</td>

<td className="border border-black p-3 text-center text-green-700 font-semibold">
  Completed
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-10 mb-10">
      <button className="flex rounded-lg p-3 items-center shadow-lg font-bold text-xl text-white bg-teal-600 hover:bg-teal-800 ">Generate Report</button>
      </div>

    </div>
  );
};

export default ClientTasks;
