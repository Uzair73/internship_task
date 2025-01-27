import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import Button from "../component/Button";
import { login } from "../../apis/api_handler";
import Swal from "sweetalert2";
import { ImSpinner2 } from "react-icons/im";
import Cookies from "js-cookie"

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await login(formData.email, formData.password);
      if (response.token) {
        Cookies.set('auth_token', response.token, { expires: 1, path: '/' })
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You have successfully logged in!',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/dashboard");
          }
        });
      } else {
        throw new Error('Token not provided in response');
      }
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4 sm:px-6 lg:px-8">
      <img src="/logo.svg" alt="logo" className="w-16 h-16 mb-3" />
      <div className="text-3xl sm:text-4xl font-bold mb-4 text-center">Welcome back</div>
      <div className="bg-white p-6 sm:p-10 rounded shadow-md w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="flex text-gray-700 mb-2">Email address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none"
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="flex text-gray-700 mb-2">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none"
                onChange={handleInputChange}
                value={formData.password}
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
            classname={`w-full bg-[#047857] text-white py-2 rounded hover:bg-green-700 focus:outline-none cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            btn_text={isSubmitting ? <ImSpinner2 className="animate-spin mx-auto" /> : "Sign in"}
            disabled={isSubmitting}
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
