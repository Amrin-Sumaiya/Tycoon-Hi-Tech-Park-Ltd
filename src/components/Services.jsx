import React, { useEffect, useState } from "react";
import {
  FaBuilding,
  FaCloud,
  FaNetworkWired,
  FaHeadset,
  FaShieldAlt,
  FaServer,
  FaLightbulb,
  FaUsersCog,
} from "react-icons/fa";

const services = [
  {
    title: "IT Office Spaces",
    desc: "Modern, scalable & secure workspaces",
    icon: <FaBuilding />,
  },
  {
    title: "Digital Solutions",
    desc: "Custom software & cloud services",
    icon: <FaCloud />,
  },
  {
    title: "Smart Infrastructure",
    desc: "High-speed connectivity & automation",
    icon: <FaNetworkWired />,
  },
  {
    title: "Enterprise Support",
    desc: "24/7 technical & operational support",
    icon: <FaHeadset />,
  },
  {
    title: "Cyber Security",
    desc: "Enterprise-grade security & data protection",
    icon: <FaShieldAlt />,
  },
  {
    title: "Data Center Services",
    desc: "High-availability & secure server hosting",
    icon: <FaServer />,
  },
  {
    title: "Innovation Lab",
    desc: "Research, prototyping & emerging tech",
    icon: <FaLightbulb />,
  },
  {
    title: "Business Enablement",
    desc: "HR, operations & enterprise consultancy",
    icon: <FaUsersCog />,
  },
];

// ✅ duplicate for infinite loop
const loopedServices = [...services, ...services];

const Services = () => {
  const [current, setCurrent] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // silent reset (NO visual jump)
  useEffect(() => {
    if (current === services.length) {
      setTimeout(() => {
        setCurrent(0);
      }, 700); // must match transition duration
    }
  }, [current]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-4xl text-gray-700 font-sans font-bold text-center mb-10">
          Our Company's Services
          
        </h3>
       

        {/* Slider */}
        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {loopedServices.map((item, index) => (
              <div key={index} className="w-full px-4">
                <div className="h-70 w-70 bg-linear-to-r from-red-100 to-pink-100 rounded-2xl p-10 text-center shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-6">
                    <div className="text-red-600 text-5xl">
                      {item.icon}
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-red-700 mb-3">
                    {item.title}
                  </h4>

                  <p className="text-gray-700 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
