import React from 'react';
import ImageCTA from '../assets/newarrive.jpeg'; // replace with your actual image

const CTA = () => {
  return (
    <section className="bg-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={ImageCTA}
              alt="Tycoon Hi-Tech Park"
              className="rounded-2xl w-64 md:w-72 lg:w-80 h-auto object-cover shadow-lg"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Testimonials */}
            <div >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Testimonials
              </h3>
              <p className="text-gray-700 mb-2">
                "The quality and performance of Tycoon products are truly impressive! Great value for money." — Customer feedback
              </p>
              <p className="text-gray-700">
                "Reliable appliances with excellent after-sales support." — Verified customer
              </p>
            </div>

            {/* Future Outlook */}
            <div >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Future Outlook
              </h3>
              <p className="text-gray-700">
                Tycoon Hi-Tech Park Ltd. is continuously expanding its product lines and distribution network. Our aim is to adopt cutting-edge technologies and establish ourselves as a trusted global brand while creating jobs and contributing to Bangladesh’s manufacturing excellence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
