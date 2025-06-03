
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🐾</span>
              <span className="text-2xl font-bold">PawsomeCities</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Making cities more pet-friendly, one paw at a time. Join our community of passionate volunteers creating positive change for pets and families everywhere! 🌟
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl hover:animate-bounce cursor-pointer">🐕</span>
              <span className="text-2xl hover:animate-bounce cursor-pointer">🐱</span>
              <span className="text-2xl hover:animate-bounce cursor-pointer">🐰</span>
              <span className="text-2xl hover:animate-bounce cursor-pointer">🐦</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-coral-400 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#volunteer')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-coral-400 transition-colors duration-200"
                >
                  Volunteer
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#impact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-coral-400 transition-colors duration-200"
                >
                  Impact Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 hello@pawsomecities.org</p>
              <p>📞 (555) 123-PETS</p>
              <p>📍 Nationwide Movement</p>
              <p>🕒 Mon-Fri, 9AM-5PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 PawsomeCities Campaign. Made with ❤️ for pets and their humans.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Together, we're making every city a little more paw-some! 🐾✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
