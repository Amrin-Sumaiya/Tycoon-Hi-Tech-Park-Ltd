import React from "react";
import AboutImage from "../assets/topitem.jpeg"; // Make sure to replace with your actual image name

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-5 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About <span className="text-red-500">Us</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-3 rounded"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-25 items-start">
          {/* Left Column - Mission & Vision */}
          <div className="flex flex-col gap-8">
            {/* Mission Box */}
            <div className="bg-white border-l-4 border-red-500 p-5 rounded shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Our Mission
              </h4>
              <p className="text-gray-700">
                Our mission is to develop premium quality electronics and appliances engineered for everyday use, promote local manufacturing to support Bangladesh’s technological advancement, ensure customer satisfaction through product excellence and efficient after-sales service, and continuously innovate while adopting global standards in design and production.
              </p>
            </div>

            {/* Vision Box */}
            <div className="bg-white border-l-4 border-red-500 p-5 rounded shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Our Vision
              </h4>
              <p className="text-gray-700">
                To become a leading electronics and appliances brand in Bangladesh and expand our footprint in the global market by delivering innovative, reliable, and customer-centric technology solutions.
              </p>
            </div>
          </div>

          {/* Right Column - Company Info */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              <span className="text-red-500 text-3xl md:text-4xl align-top mr-1">
                T
              </span>
              ycoon Hi-Tech Park Ltd.
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              Tycoon Hi-Tech Park Ltd. is a Bangladesh-based technology and
              electronics manufacturing company dedicated to delivering
              high-quality, innovative consumer electronics and home appliances.
              With a strong commitment to the <strong>“Made in Bangladesh”</strong>{" "}
              ethos, we design and produce products that combine modern
              technology with reliable performance for households and businesses
              nationwide.
            </p>
          </div>
        </div>

        {/* Image Below Content */}
        <div className="mt-12">
          <img
            src={AboutImage}
            alt="About Us Banner"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
