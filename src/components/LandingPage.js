import React from 'react';
import Header from './Header';
import ContentSection from './ContentSection';
import Footer from './Footer';
import Conclusion from './conclusion';


const LandingPage = () => {


  return (
    <div className="bg-[#2A2A2A] text-white min-h-screen pt-10 font-sans">
      <Header />
      
      <main className='bg-white'>
        <ContentSection />
      <Conclusion/>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage; 