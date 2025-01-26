import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Button from "../component/Button";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
    <img src="/logo.svg" alt="logo" className="w-16 h-16 mb-3" />
      <div className="text-4xl font-bold mb-4">Welcome back</div>
      <div className="bg-white p-10 rounded shadow-md w-full max-w-md">
        <form>
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
          <Button
            type="submit"
            classname="w-full bg-[#047857] text-white py-2 rounded hover:bg-green-700 focus:outline-none cursor-pointer"
            btn_text={"Sign in"}
          />
        </form>
        <div className="text-center mt-4">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-green-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
