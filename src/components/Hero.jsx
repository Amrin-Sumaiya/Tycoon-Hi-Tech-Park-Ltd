import React from 'react'

const Hero = () => {
  return (
    <section className="bg-linear-to-r from-red-100 to-pink-100 text-white">
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl md:text-5xl text-gray-600 font-bold mb-4">
          Smart Business Starts Here
        </h2>
        <p className="text-lg md:text-xl mb-8 text-black">
          IT-enabled commercial spaces & enterprise solutions
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-red-400 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">
            Explore Solutions
          </button>
          <button className="border border-b-pink-300 bg-white font-bold  text-red-400 px-6 py-3 rounded hover:bg-white hover:text-blue-700 transition">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
