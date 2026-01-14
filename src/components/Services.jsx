import React, { useState } from "react";
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

const ITEMS_PER_PAGE = 4;

const Services = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);

  const startIndex = page * ITEMS_PER_PAGE;
  const visibleItems = services.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const prevPage = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Our Company's Services
        </h3>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          End-to-end IT infrastructure and digital solutions designed to
          empower modern businesses and enterprises.
        </p>

        {/* Controls + Cards */}
        <div className="flex items-center gap-6">
          
          {/* Prev Button */}
          <button
            onClick={prevPage}
            className="w-12 h-12 rounded-full border-2 bg-pink-50 border-red-600 font-bold text-red-600 hover:bg-red-600 hover:text-white transition flex-shrink-0"
          >
            ‹
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1">
            {visibleItems.map((item, index) => (
              <div
                key={index}
                className="bg-linear-to-r from-red-100 to-pink-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <div className="text-red-600 text-4xl mb-4 flex justify-center">
                  {item.icon}
                </div>

                <h4 className="text-lg font-semibold text-red-700 mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-700 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextPage}
            className="w-12 h-12 rounded-full border border-red-500 text-red-600 hover:bg-red-600 hover:text-white transition flex-shrink-0"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
