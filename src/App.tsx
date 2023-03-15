import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import React from 'react'

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
