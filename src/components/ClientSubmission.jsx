import React, { useState } from 'react';
import VistaLogo from '../assets/vista_logo.png';
import logo from '../assets/image.png';
import { MdDriveFolderUpload } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';

const ClientSubmission = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const filesWithPreview = selectedFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file)
    }));
    setFiles(filesWithPreview);
  };

  const handlePreview = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      {/* Header logos */}
      <div className="flex flex-row items-center p-5">
        <img src={logo} alt="logo" style={{ maxWidth: '100px' }} />
        <img
          src={VistaLogo}
          alt="Vista_logo"
          style={{ maxWidth: '200px', marginLeft: '20px' }}
        />
      </div>

      {/* Heading */}
      <div className="text-center mt-10 text-3xl font-bold text-teal-700">
        <h1>Client Document Submission</h1>
        <p className="text-lg text-gray-600 mt-4">
          Please upload the required documents below.
        </p>
        <p className="text-lg text-gray-600">
          Upload document formats: .pdf, .xlsx, .jpg, .jpeg, .png
        </p>
      </div>

      {/* Upload box */}
      <label htmlFor="file-upload" className="cursor-pointer">
        <div className="rounded-lg shadow-lg bg-white px-16 py-12 max-w-md mx-auto mt-10 hover:bg-gray-100 transition-all">
          <div className="flex items-center justify-center text-8xl text-teal-600">
            <MdDriveFolderUpload />
          </div>
          <div className="flex justify-center mt-4 text-xl font-bold text-gray-700">
            Browse files from local
          </div>
        </div>
        {/* Hidden file input */}
        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple
          accept=".pdf,.xlsx,.jpg,.jpeg,.png"
          onChange={handleFileChange}
        />
      </label>

      {/* Uploaded Files List */}
      {files.length > 0 && (
        <div className="max-w-md mx-auto mt-6 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-teal-700 mb-2">Uploaded Files:</h2>
          <ul className="space-y-2">
            {files.map((f, index) => (
              <li key={index} className="flex items-center justify-between text-gray-700">
                <span className="truncate w-64">{f.file.name}</span>
                <button
                  onClick={() => handlePreview(f.url)}
                  className="text-teal-600 hover:text-teal-900"
                  title="Preview file"
                >
                  <FaEye size={20} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClientSubmission;
