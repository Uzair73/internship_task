import React from 'react'
import Navbar from '../component/Navbar'
import Feature_section from '../component/Feature_section'
import Steps from "../component/Steps";
import SavingsSection from '../component/SavingsSection';
import Button from '../component/Button';

const Home = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-green-50 py-20 md:py-40">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-normal">
          Smart Grocery Shopping, <span className="text-[#047857]">Made Simple</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-justify px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80">
          Organize your grocery lists, track prices, and save money with our intelligent shopping assistant. Join over 50,000 smart shoppers saving time and money every day.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button btn_text={'Get Started Free'} classname={'bg-[#047857] font-semibold text-white px-6 md:px-8 py-2 md:py-3 rounded-md cursor-pointer text-lg'}/>
          <Button btn_text={'Watch Demo'} classname={'bg-white text-[#047857] px-4 md:px-6 py-2 md:py-3 rounded shadow-md hover:bg-gray-50 cursor-pointer'}/>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-600">
          <div className="flex items-center">
            <span className="mr-2">⭐</span> 4.9/5 rating
          </div>
          <div className="flex items-center">
            <span className="mr-2">👥</span> 50K+ users
          </div>
          <div className="flex items-center">
            <span className="mr-2">🔒</span> Secure & Private
          </div>
        </div>
      </div>
    </section>
    <Feature_section/>
    <Steps/>
    <section className='bg-[#ECFDF5]'>
      <div className="container mx-auto py-10 px-4">
        <h1 className='text-4xl font-semibold mb-5 text-center'>Loved by Shoppers</h1>
        <p className='text-2xl text-center mb-7'>See what our users have to say about GrocerySave</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="box p-4 bg-white rounded shadow-md py-10 w-full md:w-auto">
            <div className="flex items-center gap-5">
              <span className='rounded-full px-6 py-4 bg-green-100 text-green-600 font-bold'>S</span>
              <div className="flex flex-col mb-1 text-start">
                <span className="font-bold text-xl">Sarah Johnson</span>
                <span className="text-sm text-gray-500">Busy Mom</span>
              </div>
            </div>
            <p className="italic py-4 text-md font-extralight">"GrocerySave has completely transformed how I shop for my family. I save both time and money every week!"</p>
          </div>
          <div className="box p-4 bg-white rounded shadow-md py-10 w-full md:w-auto">
            <div className="flex items-center gap-5">
              <span className='rounded-full px-6 py-4 bg-green-100 text-green-600 font-bold'>M</span>
              <div className="flex flex-col mb-1 text-start">
                <span className="font-bold text-xl">Mike Chen</span>
                <span className="text-sm text-gray-500">Budget Conscious</span>
              </div>
            </div>
            <p className="italic py-4 text-md font-extralight">"The price tracking feature is amazing. I've saved over $200 in the past month alone."</p>
          </div>
          <div className="box p-4 bg-white rounded shadow-md py-10 w-full md:w-auto">
            <div className="flex items-center gap-5">
              <span className='rounded-full px-6 py-4 bg-green-100 text-green-600 font-bold'>E</span>
              <div className="flex flex-col mb-1 text-start">
                <span className="font-bold text-xl">Emily Davis</span>
                <span className="text-sm text-gray-500">Health Enthusiast</span>
              </div>
            </div>
            <p className="italic py-4 text-md font-extralight">"I love how I can organize my shopping lists by category. Makes healthy shopping so much easier!"</p>
          </div>
        </div>
      </div>
    </section>
    <SavingsSection/>
    <section className="bg-[#047857] py-20">
      <div className="container mx-auto text-center text-white px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Start saving on groceries today</h2>
        <p className="text-md sm:text-lg mb-8">
          Join thousands of smart shoppers who are already saving time and money with GrocerySave. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button classname="bg-white text-green-600 px-6 py-3 rounded" btn_text={"Sign Up Now - It's Free"}/>
          <Button classname="bg-transparent border border-white text-white px-6 py-3 rounded" btn_text={"Schedule a Demo"}/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home