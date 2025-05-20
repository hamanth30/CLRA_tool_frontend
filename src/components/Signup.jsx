import React from 'react';
import Signup from '../assets/signup.jpg'

const SignupPage = () => {
  return (
  <div className="min-h-screen flex">
        {/* Left Image Section */}
        <div className="pr-10 ">
          <img
            src={Signup}
            alt="Login Background"
            className="h-full w-full object-cover"
          />
        </div>

      {/* Signup Form Section */}
     <div className="flex pr-25 items-center justify-center ">
        <div className="w-[350px] bg-white p-8 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
        <h2 className="text-3xl font-bold text-teal-700 mb-6">SIGN UP</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-teal-900 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-teal-900 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="text-sm text-gray-600">
            <a href="#" className="hover:underline">
              Existing user?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 rounded-md transition"
          >
            Signup
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
