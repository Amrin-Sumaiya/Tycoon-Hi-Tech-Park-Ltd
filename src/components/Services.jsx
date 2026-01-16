import React from "react";
import {
  FaSnowflake,
  FaFire,
  FaTv,
  FaBlender,
  FaClock,
  FaCogs,
  FaFan,
  FaUtensils,
} from "react-icons/fa";

// Import your images from the assets folder
import Img1 from "../assets/bot1.jpeg"; // 494x500
import Img2 from "../assets/bot2.jpeg"; // 386x220
import Img3 from "../assets/bot3.jpeg"; // 189x260
import Img4 from "../assets/bot4.jpeg"; // 189x260
import Img5 from "../assets/bot5.jpeg"; // 288x489

const services = [
  {
    title: "Top-quality Refrigerators",
    desc: "Efficient, durable refrigerators designed for modern households.",
    icon: <FaSnowflake />,
  },
  {
    title: "Efficient Microwave Ovens",
    desc: "Quick and reliable cooking solutions for every kitchen.",
    icon: <FaFire />,
  },
  {
    title: "Stylish LED Televisions",
    desc: "High-definition TVs with sleek design and smart features.",
    icon: <FaTv />,
  },
  {
    title: "Durable Rice Cookers",
    desc: "Precision cooking for perfect rice every time.",
    icon: <FaClock />,
  },
  {
    title: "Precision-engineered Mixer Grinders",
    desc: "Powerful, safe, and user-friendly kitchen appliances.",
    icon: <FaBlender />,
  },
  {
    title: "Safe and Reliable Pressure Cookers",
    desc: "Energy-efficient cooking with modern safety features.",
    icon: <FaCogs />,
  },
  {
    title: "Compact Kitchen Appliances",
    desc: "Space-saving and efficient devices for everyday use.",
    icon: <FaUtensils />,
  },
  {
    title: "Tycoon Brand Fans",
    desc: "High-performance fans to keep your home cool and comfortable.",
    icon: <FaFan />,
  },
];

const Services = () => {
  return (
    <section id="productportfolio" className="py-24 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Product <span className="text-red-700">Portfolio</span>
        </h3>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We offer a diverse range of home and consumer electronics designed to
          meet modern household needs. Each product is developed with a focus on
          performance, safety, energy efficiency, and user-friendly design.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center flex flex-col"
            >
              <div className="text-red-700 text-4xl mb-4 flex justify-center">
                {item.icon}
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm mb-4 flex-grow">{item.desc}</p>

              <button className="mt-auto bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Image Section Below */}
{/* Image Section Below */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-[6px]">
  
  {/* LEFT – Tall Image */}
  <div className="h-full">
    <img
      src={Img1}
      alt="Mixer Grinder"
      className="w-full h-full object-cover rounded-md aspect-[4/5]"
    />
  </div>

  {/* MIDDLE – One top, two bottom */}
  <div className="grid grid-rows-[auto_1fr] gap-[6px]">
    
    {/* Top Wide Image */}
    <img
      src={Img2}
      alt="Product Range"
      className="w-full object-cover rounded-md aspect-[16/9]"
    />

    {/* Bottom Two Images */}
    <div className="grid grid-cols-2 gap-[6px]">
      <img
        src={Img3}
        alt="Room Heater"
        className="w-full object-cover rounded-md aspect-[3/4]"
      />
      <img
        src={Img4}
        alt="Rice Cooker"
        className="w-full object-cover rounded-md aspect-[3/4]"
      />
    </div>
  </div>

  {/* RIGHT – Tall Image */}
  <div className="h-full">
    <img
      src={Img5}
      alt="Smart TV"
      className="w-full h-full object-cover rounded-md aspect-[4/5]"
    />
  </div>

</div>

      </div>
    </section>
  );
};

export default Services;
