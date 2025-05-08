import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DailyFact from './components/DailyFact';
import About from './components/About';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import ImageUpload from './components/ImageUpload';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DailyFact />
      <About />
      <Programs />
      <Trainers />
      <Testimonials />
      <ImageUpload />
      <Footer />
    </div>
  );
}

export default App;