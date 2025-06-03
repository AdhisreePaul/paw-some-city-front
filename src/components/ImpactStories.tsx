
import React from 'react';

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      title: "Max Found His Forever Home 🏠",
      description: "Thanks to our pet adoption events, Max, a 3-year-old Golden Retriever, found his perfect family in downtown Portland. The Johnson family says he's brought so much joy to their lives!",
      emoji: "🐕",
      location: "Portland, OR",
      impact: "50+ pets adopted this year"
    },
    {
      id: 2,
      title: "New Dog Park Opens! 🌳",
      description: "Our volunteer efforts helped secure funding for a brand new dog park in the heart of Austin. The community came together to create a safe, fun space for pets and their families.",
      emoji: "🌳",
      location: "Austin, TX",
      impact: "3 new pet spaces created"
    },
    {
      id: 3,
      title: "Bella's Rescue Story 💕",
      description: "When Bella was found injured, our network of volunteers and local vets worked together to nurse her back to health. She's now a therapy dog bringing smiles to nursing homes!",
      emoji: "🐱",
      location: "Seattle, WA",
      impact: "200+ animals rescued"
    }
  ];

  return (
    <section id="impact" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Amazing Impact Stories 🌟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our community of volunteers is making real change for pets and families across the country!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100 overflow-hidden group"
            >
              {/* Story Header */}
              <div className="p-6 bg-gradient-to-br from-coral-50 to-mint-50 border-b border-pink-100">
                <div className="text-4xl mb-3 text-center group-hover:animate-bounce">
                  {story.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 text-center font-medium">
                  📍 {story.location}
                </p>
              </div>

              {/* Story Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {story.description}
                </p>
                
                <div className="bg-gradient-to-r from-sky-50 to-mint-50 rounded-lg p-4 border border-sky-100">
                  <p className="text-sm font-semibold text-sky-700 text-center">
                    🎯 {story.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-pink-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to Create Your Own Success Story? ✨
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of volunteers who are making a real difference in their communities!
            </p>
            <button
              onClick={() => document.querySelector('#volunteer')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Journey 🚀
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
