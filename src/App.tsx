import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InstagramFeed } from './components/InstagramFeed'
import { Pricing } from './components/Pricing'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import { Testimonials } from './components/Testimonials'
import React, { useRef } from 'react'

export const App = () => {
  const aboutMeRef = useRef(null)
  const pricingRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div className='App'>
      <ScrollToTop />
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
