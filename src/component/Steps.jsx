// src/component/Steps.jsx
import React, { useState } from 'react';
import Button from './Button';

const steps = [
  {
    id:1,
    title: 'Create Lists',
    description: 'Create custom shopping lists for different stores or occasions',
    details: ['Organize by store', 'Share with family', 'Set reminders'],
  },
  {
    id: 2,
    title: 'Add Items',
    description: 'Easily add items to your lists with a few clicks',
    details: ['Search for items', 'Add from history', 'Set quantities'],
  },
  {
    id: 3,
    title: 'Track Prices',
    description: 'Monitor price changes and get alerts for discounts',
    details: ['Price history', 'Discount alerts', 'Compare prices'],
  },
  {
    id: 4,
    title: 'Save Money',
    description: 'Use our tips and tools to save money on groceries',
    details: ['Coupons', 'Budget tracking', 'Weekly deals'],
  },
];

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section className="bg-[#f9fafb] py-20">
        <h1 className='text-4xl font-bold mb-3'>How GrocerySave Works</h1>
        <p className='text-2xl'>Get started in minutes and save hours every week</p>
      <div className="container mx-auto flex gap-10 py-20">
        <div className="w-102">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-4 mb-4 cursor-pointer rounded-lg bg-gray-100 ${
                index === currentStep ? 'border-l-5 border-[#10b981] bg-white shadow-md' : 'hover:bg-white hover:shadow-md'
              }`}
              onClick={() => setCurrentStep(index)}
            >
              <div className="flex flex-col items-start">
                <span className="text-[#10b981] text-md mr-2">{`Step ${index + 1}`}</span>
                <span className='text-xl font-semibold'>{step.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-3/4 bg-white rounded-xl border border-gray-200 shadow-md py-10 px-10">
          <h3 className="text-2xl font-bold mb-4 text-start">{steps[currentStep].title}</h3>
          <p className="text-lg mb-6 text-start">{steps[currentStep].description}</p>
          <div className="flex justify-center gap-4 mb-6">
            {steps[currentStep].details.map((detail, index) => (
              <div key={index} className="bg-gray-100 hover:bg-green-50 px-20 py-9 rounded-lg">
                <span className="">{detail}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between py-8">
            <Button
              classname={`text-gray-500 ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
              disabled={currentStep === 0}
              btn_text={"Previous Step"}
            />
            <Button
              classname={`bg-green-500 text-white px-4 py-2 rounded ${currentStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
              disabled={currentStep === steps.length - 1}
              btn_text={"Next Step"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;