import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import {Footer} from './components/layout/Footer'


function App() {

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main >
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer/>
    </div>
  )
}

export default App
