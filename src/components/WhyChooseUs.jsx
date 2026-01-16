import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="whychooseus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Centered Heading */}
        <div className="mb-14 text-center">
          <h3 className="text-3xl md:text-4xl font-bold leading-snug">
            Why Choose <span className="text-red-600">T</span>ycoon?
          </h3>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-700">

          {/* Column 1: Why Choose Tycoon */}
          <div className="space-y-4" data-aos="fade-up">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Made in Bangladesh:</strong> Proudly manufactured locally with international quality standards</li>
              <li><strong>Quality Assurance:</strong> Rigorously tested products built for long-lasting performance</li>
              <li><strong>Customer Focus:</strong> Dedicated support and service network across the country</li>
              <li><strong>Innovative Design:</strong> Contemporary products that simplify everyday life</li>
              <li><strong>Value for Money:</strong> Reliable technology at competitive prices</li>
            </ul>
          </div>

          {/* Column 2: Our Commitment */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="150">
            <h4 className="text-2xl font-bold text-gray-800 mb-2">Our Commitment</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Dependability:</strong> Products that deliver consistent performance</li>
              <li><strong>Innovation:</strong> Bringing modern technology to everyday living</li>
              <li><strong>Sustainability:</strong> Practices that respect people and the environment</li>
              <li><strong>Trust:</strong> Building lifelong relationships with customers, partners, and communities</li>
            </ul>
          </div>

          {/* Column 3: Careers */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-2xl font-bold text-gray-800 mb-2">Careers</h4>
            <p className="mb-2">
              At Tycoon Hi-Tech Park Ltd., we believe in fostering talent and growing together as a team. We periodically seek professionals in areas such as:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Marketing & Brand Management</strong></li>
              <li><strong>Product Design & Development</strong></li>
              <li><strong>Multimedia & Creative Services</strong></li>
              <li><strong>Sales & Customer Support</strong></li>
              <li><strong>Operations & Logistics</strong></li>
            </ul>
            <p className="mt-2 text-gray-600">
              Visit our website or Facebook page for current job openings.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
