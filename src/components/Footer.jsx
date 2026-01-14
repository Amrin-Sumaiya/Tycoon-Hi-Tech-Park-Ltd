import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-4">
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Tycoon Hi Tech Park
          </h4>
          <p>
            Empowering businesses with modern technology and infrastructure.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p>Email: info@tycoonhitech.com</p>
          <p>Phone: +880 1234 567890</p>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500">
        © 2026 Tycoon Hi Tech Park. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
