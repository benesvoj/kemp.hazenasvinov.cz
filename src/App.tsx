import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InstagramFeed } from './components/InstagramFeed'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import React from 'react'

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <InstagramFeed />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
