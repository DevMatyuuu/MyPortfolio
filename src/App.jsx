import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatIdo from './components/WhatIDo'
import Projects from './components/Projects'
import './scrollbar.css'



import './App.css'

function App() {
  

  return (
     <div className='custom-scrollbar bg-white'>
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <WhatIdo />
      <Contact />
      <Footer />
     </div>
   
  )
}

export default App
