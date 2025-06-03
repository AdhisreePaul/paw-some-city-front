
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VolunteerForm from '../components/VolunteerForm';
import ImpactStories from '../components/ImpactStories';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
      <Navbar />
      <Hero />
      <VolunteerForm />
      <ImpactStories />
      <Footer />
    </div>
  );
};

export default Index;
