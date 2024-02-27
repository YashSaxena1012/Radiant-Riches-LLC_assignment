import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import ContactUs from './Components/ContactUs'
import { Parallax } from 'react-parallax'
import img2 from './assets/img2.avif'
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Parallax strength={400} bgImage={img2} >
        <ContactUs />
      </Parallax>
      <Footer/>
    </>
  )
}

export default App