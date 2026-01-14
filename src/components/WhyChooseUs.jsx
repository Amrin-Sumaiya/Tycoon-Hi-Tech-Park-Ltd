import React from "react";
import { FaMapMarkerAlt, FaChartLine, FaShieldAlt, FaHeadset } from "react-icons/fa";
import Image2 from "../assets/image2.jpg";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-14 max-w-xl">

          <h3 className="text-3xl md:text-4xl font-bold leading-snug">
            Why Businesses Trust <br />
            Tycoon Hi Tech Park
          </h3>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Left Image */}
{/* Left Image */}
<div className="flex justify-center lg:justify-start">
  <div className="bg-pink-100 p-4 rounded-3xl max-w-md">
    <img
      src={Image2}
      alt="Why Choose Tycoon Hi Tech Park"
      className="rounded-2xl w-500 h-100 object-cover"
    />
  </div>
</div>


          {/* Right Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 mb-4 bg-blue-100 text-red-600 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt size={20} />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Prime Location
              </h4>
              <p className="text-gray-600 text-sm">
                Strategically located for business growth
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 mb-4 bg-green-100 text-red-600 rounded-full flex items-center justify-center">
                <FaChartLine size={20} />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Scalable Growth
              </h4>
              <p className="text-gray-600 text-sm">
                Flexible solutions for startups to enterprises
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 mb-4 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                <FaShieldAlt size={20} />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Secure System
              </h4>
              <p className="text-gray-600 text-sm">  
                High-level security & infrastructure
              </p>
            </div>   
            

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 mb-4 bg-purple-100 text-red-600 rounded-full flex items-center justify-center">
                <FaHeadset size={20} />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Expert Support
              </h4>
              <p className="text-gray-600 text-sm">
                Dedicated professionals at your service
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
