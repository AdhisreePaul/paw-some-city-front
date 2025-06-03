
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const VolunteerForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    rolePreference: ''
  });

  const roleOptions = [
    'Pet Adoption Coordinator 🏠',
    'Dog Walking Volunteer 🚶‍♀️',
    'Pet Care Assistant 🩺',
    'Community Outreach 📢',
    'Event Organizer 🎉',
    'Foster Parent 💕'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.city || !formData.rolePreference) {
      toast({
        title: "Please fill in all fields! 📝",
        description: "We need all your information to get you started.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Welcome to the pack! 🎉",
      description: `Thank you ${formData.name}! We'll be in touch soon about volunteer opportunities in ${formData.city}.`,
    });

    // Reset form
    setFormData({ name: '', city: '', rolePreference: '' });
  };

  return (
    <section id="volunteer" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ready to Make a Difference? 🌟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sign up to volunteer and help us create more pet-friendly spaces in your city!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-pink-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name 👋
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-coral-500 focus:outline-none transition-colors duration-200"
                />
              </div>

              {/* City Field */}
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your City 🏙️
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-coral-500 focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>

            {/* Role Preference */}
            <div>
              <label htmlFor="rolePreference" className="block text-sm font-semibold text-gray-700 mb-2">
                How would you like to help? 🤝
              </label>
              <select
                id="rolePreference"
                name="rolePreference"
                value={formData.rolePreference}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-coral-500 focus:outline-none transition-colors duration-200"
              >
                <option value="">Select your preferred role</option>
                {roleOptions.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-mint-500 to-mint-600 text-white font-semibold rounded-full hover:from-mint-600 hover:to-mint-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Count Me In! 🎯
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;
