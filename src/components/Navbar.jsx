import React from 'react'

const Navbar = () => {
  return (
 <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h3 className="text-3xl font-bold font-serif text-red-600">
          Tycoon <span className='text-xl text-black'>Hi-Tech Park</span>
        </h3>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Solutions</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-red-400 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Get Quote
        </button>
      </div>
    </nav>
  )
}

export default Navbar
