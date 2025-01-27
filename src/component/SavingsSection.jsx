import React from 'react';
import Button from './Button';

const SavingsSection = () => {
  return (
    <section className="bg-green-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Calculate Your Savings</h2>
        <p className="text-lg text-gray-600 mb-8">See how much you could save with GrocerySave</p>
        <div className="bg-white shadow-lg rounded-lg px-4 sm:px-8 py-6 inline-block w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:gap-32 mb-6">
            <div className="text-center sm:text-left w-full">
              <h3 className="text-base font-semibold text-gray-700">Monthly Grocery Spend</h3>
              <p className="text-2xl font-bold text-[#047857] mt-2">$600</p>
              <p className="text-sm text-gray-500 mt-1">Average household spend</p>
            </div>
            <div className="text-center sm:text-left w-full">
              <h3 className="text-base font-semibold text-gray-700">Potential Savings</h3>
              <p className="text-2xl font-bold text-[#047857] mt-2">$180</p>
              <p className="text-sm text-gray-500 mt-1">30% average savings</p>
            </div>
          </div>
          <Button btn_text={'Start Saving Today'} classname="bg-[#047857] hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 w-full sm:w-auto cursor-pointer"/>
        </div>
      </div>
    </section>
  );
};

export default SavingsSection;