import React from 'react'
import VistaLogo from '../assets/vista_logo.png';
import logo from '../assets/image.png';

const ClientRegisteration = () => {
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

          <div className="text-center mt-2 text-3xl font-bold text-teal-700">
                    Client Registration
          </div>


            <div className="flex flex-col space-y-5 items-center mt-10">
                <div className="flex flex-row space-x-2">
                    <label htmlFor="name" className="text-lg font-semibold">Comapany Name:</label>
                    <input type="text" id="name" placeholder="eg: Vista Engg Solutions" className="bg-white border border-teal-700 rounded p-2 w-80" />
                </div>
    
                <div className="flex flex-row space-x-2">
                    <label htmlFor="name" className="text-lg font-semibold">Comapany id:</label>
                    <input type="text" id="name" className="bg-white border border-teal-700 rounded p-2 w-80" />
                </div>
    
                <div className="flex flex-row space-x-2">
                    <label htmlFor="name" className="text-lg font-semibold">License id:</label>
                    <input type="text" id="name" placeholder="" className="bg-wihte border border-teal-700 hover:border-pink-600 bg-white rounded p-2 w-80" />
                </div>
    
                <button className="bg-teal-600 text-white px-4 py-2 rounded shadow hover:bg-teal-700 transition duration-200">Register</button>
            </div>
    </div>
  )
}

export default ClientRegisteration