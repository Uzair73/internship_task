import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Button from "../component/Button";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  }
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
         <img src="/logo.svg" alt="logo" className="w-16 h-16 mb-3" />
         <div className="text-3xl font-bold mb-4">Create your account</div>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="text-center mb-6">
        </div>
        <form>
          <div className="mb-4">
            <label className="flex text-gray-700 mb-2">Full name</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-10 py-2 border rounded focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="flex text-gray-700 mb-2">Email address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-10 py-2 border rounded focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="flex text-gray-700 mb-2">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-10 py-2 border rounded focus:outline-none"
              />
              <Button
                type="button"
                onClick={togglePasswordVisibility}
                classname="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none text-2xl cursor-pointer"
                btn_text={showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="flex text-gray-700 mb-2">Confirm password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-10 py-2 border rounded focus:outline-none"
              />
              <Button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                classname="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none cursor-pointer text-2xl"
                btn_text={showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              />
            </div>
          </div>
          <Button
            type="submit"
            classname="w-full bg-[#047857] text-white py-2 rounded hover:bg-green-700 focus:outline-none"
            btn_text={"Create account"}
          />
        </form>
        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <Link to="/login" className="text-green-600 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
