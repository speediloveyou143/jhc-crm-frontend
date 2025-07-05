import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';


export default function WhyChooseUs() {
  return (
    <div>
      {/* //first layout */}
      <div className="w-full h-[85vh]  flex flex-col md:flex-row bg-lime-600 justify-between items-center p-[6%] ">
        {/* Left Content - 50% width */}
        <div className="w-full group md:w-[45%] mb-[5%] md:mb-0">
          <h2 className="text-5xl font-bold text-white mb-[5%]">
            Why to <span className="text-gray-900">Choose</span> CRM
          </h2>
          <p className="text-xl mb-[8%] text-gray-900">
            We offer more than just software – we deliver real solutions for growing your business.
          </p>
          <div className="relative w-[65%]  aspect-square bg-white rounded-full shadow-xl mx-auto overflow-hidden">
            <img
              src="/images/whychooseus.png"
              alt="Why Choose Us"
              className="absolute inset-0 w-full h-full group-hover:w-[320px] group-hover:h-[320px] duration-700  object-cover"
            />
          </div>
        </div>

        {/* Right Content - 50% width */}
        <div className="w-full md:w-[45%]">
          <div className="w-full grid grid-cols-2 gap-[5%]">
            {/* WhatsApp Card */}
            <div className="relative group w-full aspect-square bg-white text-black flex flex-col items-center justify-end p-[5%] rounded-lg shadow-md overflow-hidden ">
              <div className="absolute top-0 left-0 w-full h-[40%] bg-lime-200 rounded-b-full z-0 " />
              <div className="absolute flex items-center justify-center w-[25%] aspect-square rounded-full bg-white group-hover:bg-lime-500 top-[30%] z-10 transition-all duration-700 group-hover:scale-110 border border-[black] group-hover:border-none ">
                <FaWhatsapp className="text-lime-900 text-[1.5rem]" />
              </div>
              <p className="text-[0.9rem] text-center z-10 mt-auto">Provide Whatsapp chat options for easy chat with any number of persons at single click</p>
            </div>

            {/* Email Card */}
            <div className="relative group w-full aspect-square bg-white text-black flex flex-col items-center justify-end p-[5%] rounded-lg shadow-md overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[40%] bg-rose-200 rounded-b-full z-0" />
              <div className="absolute flex items-center justify-center w-[25%] aspect-square rounded-full bg-white group-hover:bg-rose-500 top-[30%] z-10 transition-all duration-700 group-hover:scale-110 border border-[black] group-hover:border-none">
                <FaEnvelope className="text-rose-900 text-[1.5rem]" />
              </div>
              <p className="text-[0.9rem] text-center z-10 mt-auto">Provide Email options for easy chat with any number of persons at single click</p>
            </div>

            {/* Phone Card */}
            <div className="relative group w-full aspect-square bg-white text-black flex flex-col items-center justify-end p-[5%] rounded-lg shadow-md overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[40%] bg-blue-200 rounded-b-full z-0" />
              <div className="absolute flex items-center justify-center w-[25%] aspect-square rounded-full bg-white group-hover:bg-blue-500 top-[30%] z-10 transition-all duration-700 group-hover:scale-110 border border-[black] group-hover:border-none">
                <FaPhone className="text-blue-900 text-[1.5rem]" />
              </div>
              <p className="text-[0.9rem] text-center z-10 mt-auto">Provide Call support options for easy make call to any number at single click</p>
            </div>

            {/* Chat Card */}
            <div className="relative group w-full aspect-square bg-white text-black flex flex-col items-center justify-end p-[5%] rounded-lg shadow-md overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[40%] bg-purple-200 rounded-b-full z-0" />
              <div className="absolute flex items-center justify-center w-[25%] aspect-square rounded-full bg-white group-hover:bg-purple-500 top-[30%] z-10 transition-all duration-700 group-hover:scale-110 border border-[black] group-hover:border-none">
                <FaComment className="text-purple-900 text-[1.5rem]" />
              </div>
              <p className="text-[0.9rem] text-center z-10 mt-auto">Provide SMS chat options for easy chat with any number of persons at single click</p>
            </div>
          </div>
        </div>
      </div>
      {/* //secound layout */}
      <div>
        <div className='w-[100%] group h-[70vh] bg-gray-900 text-lime-400 flex justify-between p-[6%] '>
          <div className='w-[55%] '>
            <h2 className="text-5xl font-bold text-white mb-[5%]">
              How <span className="text-lime-600">CRM</span> Works
            </h2>
            <p className="text-xl mb-[8%] text-lime-600">
              The <span className='text-3xl'>CRM </span>collects and organizes customer data from various touchpoints into a centralized dashboard. It automates tasks like follow-ups, lead tracking, and bulk WhatsApp messaging, allowing teams to engage customers efficiently and monitor performance in real-time
            </p>
          </div>
          <div className='w-[35%] '>
            <img src="images/how it works image.png" alt=" how it works" className='w-[300px]  h-[300px] group-hover:w-[305px] group-hover:h-[305px] duration-700 border rounded-[50%] object-cover ' />
          </div>
        </div>
      </div>
      {/* //third layout */}
      <div>
        <div className='w-[100%] h-[70vh] group  bg-lime-600 text-gray-900 flex justify-between p-[6%]'>
          <div className='w-[30%] '>
            <img src="images/how it helps.jpg" alt=" how it works" className='w-[300px] h-[300px] group-hover:w-[305px] group-hover:h-[305px] duration-700  border rounded-[50%] object-cover ' />
          </div>
          <div className='w-[60%] '>
            <h2 className="text-5xl font-bold text-white mb-[5%]">
              How <span className="text-gray-900">CRM</span> Helps
            </h2>
            <p className="text-xl mb-[8%] text-gray-900">
              Our <span className='text-3xl'>CRM </span>helps businesses manage customer relationships by tracking interactions, sales, and support. It also includes bulk WhatsApp messaging, Emailing, Managing Phone Calls, Sending Messages, enabling efficient and personalized communication at scale.
            </p>
          </div>
        </div>
      </div>
      {/* //fourth layout */}
      <div>
        <div className='w-[100%] group h-[70vh] group-hover:h-[70vh] bg-gray-900 text-lime-400 flex justify-between p-[6%] '>
          <div className='w-[55%] '>
            <h2 className="text-5xl font-bold text-white mb-[5%]">
              How <span className="text-lime-600">CRM</span> Differ
            </h2>
            <p className="text-xl mb-[8%] text-lime-600">
              <span>Unlike traditional CRMs, our system integrates bulk WhatsApp messaging, making communication faster and more direct. It’s user-friendly, customizable, and designed to streamline workflows without the complexity of bulky enterprise tools.</span>
            </p>
          </div>
          <div className='w-[35%] '>
            <img src="images/How it differ.jpg" alt=" how it differ" className='w-[300px]  h-[300px] group-hover:w-[305px] group-hover:h-[305px] duration-700 border rounded-[50%] object-cover ' />
          </div>
        </div>
      </div>
      {/* fifth layout */}
      <div className='w-full h-[40vh] bg-lime-600 text-gray-900 flex flex-col items-center justify-center'>
        <h2 className='text-5xl font-bold text-center mb-6'>
          Would you like to join CRM
        </h2>
        <div className='flex'>
          <Link to="/signup"><button className="w-[250px] h-[7vh] group bg-gray-900 text-lime-600 rounded-[50px] text-xl flex items-center justify-center gap-2">
          Join CRM Now
          <span className="text-xl duration-700 group-hover:animate-pulse">
            <AiOutlineArrowRight />
          </span>
        </button></Link>
        <Link to="/pricing"><button className="w-[250px] h-[7vh] group bg-gray-900  ml-3 text-lime-600 rounded-[50px] text-xl flex items-center justify-center gap-2">
          Check CRM Prices now
          <span className="text-xl duration-700 group-hover:animate-pulse">
            <AiOutlineArrowRight />
          </span>
        </button></Link>
        </div>
      </div>
    </div>
  );
}