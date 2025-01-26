import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="/logo.svg" alt="logo" className="h-10 w-10 mr-7" />
          <span className="text-2xl font-bold">GrocerySave</span>
        </div>
        <div className="flex items-center">
          <Link to="/login">
            <Button btn_text="Sign in" classname="mr-4 cursor-pointer hover:bg-gray-50" />
          </Link>
          <Link to="/signup">
            <Button btn_text="Sign up" classname="bg-[#047857] cursor-pointer text-white px-4 rounded" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;