import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatIdo from './components/WhatIdo'


import './App.css'

function App() {
  

  return (
     <div className='bg-white'>
      
      <NavBar />
      <Hero />
      <AboutMe />
      <WhatIdo />
      <Contact />
      <Footer />
     </div>
   
  )
}

export default App
