import React from "react"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-100 text-gray-600 py-12">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* About / Logo */}
        <div>
          <img
            src={logo}
            alt="Tycoon Hi Tech Park"
            className="w-40 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Tycoon Hi-Tech Park is a growing consumer home appliance manufacturer
            company in Bangladesh. Our vision is to manufacture products locally
            and to make Bangladesh proud of Made-in-Bangladesh level by providing
            latest technologies oriented and highly innovative products which are
            obviously better than the competitors.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-black mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-600 cursor-pointer">FAQ</li>
            <li className="hover:text-red-600 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-red-600 cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Business */}
        <div>
          <h4 className="font-semibold text-black mb-4">Business</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-600 cursor-pointer">Home</li>
            <li className="hover:text-red-600 cursor-pointer">Services</li>
            <li className="hover:text-red-600 cursor-pointer">About</li>
            <li className="hover:text-red-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-black mb-4">Presence & Contact</h4>
          <p className="text-sm mb-4">
            Contact us Head Office:
Mirpur, Dhaka, Bangladesh
Regional Office / Showroom.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <MdEmail className="text-lg text-black mt-1" />
              <span>info@tycoonbd.com</span>
            </div>

            <div className="flex items-start gap-2">
              <MdPhone className="text-lg text-black mt-1" />
              <span>+88-01332522980</span>
            </div>

            <div className="flex items-start gap-2">
              <MdLocationOn className="text-lg text-black mt-1" />
              <span>
                H# 361/1, Trimohoni, Boradi, Kushtia-7000, Bangladesh
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className=" mt-5 text-center text-gray-500 text-sm border-t border-gray-400 pt-6">
        © 2026 Tycoon Hi Tech Park. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
