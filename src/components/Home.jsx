import React, { useState } from 'react'
import boschLogo from '../assets/bosch_logo.png';
import VistaLogo from '../assets/vista_logo.png';
import logo from '../assets/image.png';
import Slider from './Slider.jsx';
import { TfiEye } from "react-icons/tfi";
import { TfiFile } from 'react-icons/tfi';
import { VscAccount } from "react-icons/vsc";
import { CiViewList } from "react-icons/ci";

const home = () => {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div className="min-h-screen bg-gray-300 relative">
      {/* Transparent Navbar at top right */}
      <nav className="absolute top-0 right-0 p-10 space-x-6 z-20">
            <button
          className="bg-transparent text-gray-800 text-xl font-semibold py-10 px-20 rounded shadow-none border-none outline-none hover:underline hover:text-blue-700 hover:decoration-blue-700 hover:decoration-2 transition duration-200 focus:outline-none"
          style={{ boxShadow: 'none', background: 'none', border: 'none', padding: 0, minWidth: 0, minHeight: 0, cursor: 'pointer' }}
          onClick={() => {
            const servicesSection = document.getElementById('services-section');
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Services
        </button>
      
        
        <button
          className="bg-transparent text-gray-800 text-xl font-semibold py-10 px-20 rounded shadow-none border-none outline-none hover:underline hover:text-blue-700 hover:decoration-blue-700 hover:decoration-2 transition duration-200 focus:outline-none"
          style={{ boxShadow: 'none', background: 'none', border: 'none', padding: 0, minWidth: 0, minHeight: 0, cursor: 'pointer' }}
          onClick={() => {
            const aboutSection = document.getElementById('about-section');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          About Us
        </button>
        <button className="bg-transparent text-gray-800 text-xl font-semibold py-10 px-20 rounded shadow-none border-none outline-none hover:underline hover:text-blue-700 hover:decoration-blue-700 hover:decoration-2 transition duration-200 focus:outline-none" style={{boxShadow: 'none', background: 'none', border: 'none', padding: 0, minWidth: 0, minHeight: 0, cursor: 'pointer'}}>
          Our Company
        </button>
       
      </nav>
        
      <div className="flex flex-row items-center p-5">
        <img
          src={logo}
          alt="logo"
          style={{ maxWidth: '100px' }}
        />
        <img
          src={VistaLogo}
          alt="Vista_logo"
          style={{ maxWidth: '200px', marginLeft: '20px' }}
        />
      </div>
      <Slider />

      <div id="services-section" className="w-full  bg-opacity-95 flex flex-col items-center p-8 mt-20">
        <h1 className="text-3xl text-teal-900 font-bold underline text-blue-800 mb-4">Our Services</h1>
      </div>
    <div className="flex font-bold flex-row mb-2 items-center justify-center space-x-36">
  {/* Submission */}
  <div className="group flex flex-col items-center space-y-2 cursor-pointer">
    <div className="w-20 h-20 rounded-full border-4 border-black flex items-center justify-center text-4xl group-hover:bg-pink-500 transition">
      <TfiFile />
    </div>
    <div className="text-xl group-hover:text-pink-500 group-hover:underline">Submission</div>
  </div>

  {/* View Report */}
  <div className="group flex flex-col items-center space-y-2 cursor-pointer">
    <div className="w-20 h-20 rounded-full border-4 border-black flex items-center justify-center text-4xl group-hover:bg-pink-500 transition">
      <CiViewList />
    </div>
    <div className="text-xl group-hover:text-pink-500 group-hover:underline">View Report</div>
  </div>

  {/* Account Details */}
  <div className="group flex flex-col items-center space-y-2 cursor-pointer">
    <div className="w-20 h-20 rounded-full border-4 border-black flex items-center justify-center text-4xl group-hover:bg-pink-500 transition">
      <VscAccount />
    </div>
    <div className="text-xl group-hover:text-pink-500 group-hover:underline">Account Details</div>
  </div>
</div>

      <div id="about-section" className="w-full bg-opacity-95 flex flex-col items-start p-8 mt-20">
      
        <div className="text-3xl self-center text-teal-900 font-bold underline text-blue-800 mb-4">About Us</div>
        
        <h2 className="text-4xl text-pink-600 font-bold mb-6">About VISTA</h2>
        <p className="mb-6 text-lg">
          Founded in 2011, VISTA is a Global Engineering and Technology Solutions Company specialized in AI/ML, Digital Engineering, ADAS/ Annotation & Data Engineering services, Failure analysis using advanced FEA/CFD Simulations, CAD/CAE customization, Structural Engineering and PE stamping, Manufacturing Process Simulation, Product Life Cycle Management, SAP implementation Services, Electronics and Embedded Firmware Design Services, Robotic Automation, Cybersecurity Services.
        </p>
        <p className="mb-6 text-lg">
          Headquartered in USA, with prominent global presence including Germany, Norway, Australia, UK and state-of-the-art Offshore Delivery Centers (ODC) in India.
        </p>
        <p className="mb-6 text-lg">
          We support businesses in focused verticals of Transportation & Mobility, Off highway vehicles, Avionics, Airborne Systems and Equipment, Semiconductor, Electronics and PCB Board, Medical Devices, Healthcare, Industrial Equipment & Heavy Machinery, Railways, Energy, Oil and Gas, Paper & Pulp.
        </p>
        <p className="mb-6 text-lg">
          With a scalable outsourcing/offshore model across 6 countries, a fast-growing team of 1200+ employees, and long-term customer associations, we accelerate innovation and maximize ROI on R&D investments for our customers.
        </p>
      </div>

      
    </div>
  )
}

export default home