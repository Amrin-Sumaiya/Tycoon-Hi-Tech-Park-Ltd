import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'
import AboutUs from '../components/AboutUs.jsx'
import Products from '../components/Products.jsx'
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Services />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </>
  )
}

export default HomePage
