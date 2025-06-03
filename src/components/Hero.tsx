
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToVolunteer = () => {
    const element = document.querySelector('#volunteer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-coral-200 to-coral-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-mint-200 to-mint-300 rounded-full opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-sky-200 to-sky-300 rounded-full opacity-40 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main heading with animation */}
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Making Cities
            <span className="block text-transparent bg-gradient-to-r from-coral-500 via-mint-500 to-sky-500 bg-clip-text animate-pulse">
              Paw-some! 🐾
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-500 max-w-2xl mx-auto">
          Join our community of pet lovers making cities more welcoming for our furry friends! 🐕 🐱
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-1000">
          <button
            onClick={scrollToVolunteer}
            className="group px-8 py-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-semibold rounded-full hover:from-coral-600 hover:to-coral-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
              Join the Movement 🚀
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </button>
          
          <button
            onClick={scrollToVolunteer}
            className="px-8 py-4 border-2 border-mint-500 text-mint-700 font-semibold rounded-full hover:bg-mint-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Volunteer Now 💪
          </button>
          
          <button
            onClick={() => document.querySelector('#impact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 text-sky-600 font-semibold hover:text-sky-700 transition-colors duration-300 underline decoration-sky-300 hover:decoration-sky-500"
          >
            Learn More 📖
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
