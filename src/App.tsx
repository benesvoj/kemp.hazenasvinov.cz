import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InstaFeeds } from './components/InstaFeeds'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import React from 'react'

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Testimonials />
      <>
        <header className='App-header' style={{ textAlign: 'center' }}>
          <h1>Instagram Feed with Instagram API</h1>
        </header>

        <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12} />
      </>
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
