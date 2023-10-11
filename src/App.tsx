import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Information } from "./components/Information";
import { InstagramFeed } from "./components/InstagramFeed";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Testimonials } from "./components/Testimonials";
import React from "react";

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <InstagramFeed />
        <Information />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
