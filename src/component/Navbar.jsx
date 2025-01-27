import React from 'react';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {
  const navigate = useNavigate();
  const user_Logeed_in = !!Cookies.get('auth_token');

  const handle_logout = () => {
    Cookies.remove('auth_token');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        <div className="flex items-center">
          <img src="/logo.svg" alt="logo" className="h-10 w-10 mr-3 lg:mr-7" />
          <span className="text-xl lg:text-2xl font-bold">GrocerySave</span>
        </div>
        <div className="flex items-center">
          {user_Logeed_in ? (
            <Button
              btn_text="Logout"
              classname="bg-red-500 text-white px-3 lg:px-4 py-1 lg:py-2 rounded cursor-pointer"
              onClick={handle_logout}
            />
          ) : (
            <>
              <Link to="/login">
                <Button btn_text="Sign in" classname="mr-2 lg:mr-4 cursor-pointer hover:bg-gray-50 py-1 lg:py-2" />
              </Link>
              <Link to="/signup">
                <Button btn_text="Sign up" classname="bg-[#047857] cursor-pointer text-white px-3 lg:px-4 py-1 lg:py-2 rounded" />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;