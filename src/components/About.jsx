// src/AboutPage.jsx
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12 h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to [Your Website Name], where we bring you the best in shopping with a touch of elegance and simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At [Your Website Name], our mission is to provide a seamless shopping experience with top-quality products and exceptional service. We strive to make every purchase a delightful experience by offering a curated selection of items that meet the highest standards.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Customer Satisfaction</li>
              <li>Quality and Integrity</li>
              <li>Innovation and Excellence</li>
              <li>Community Engagement</li>
            </ul>
          </div>

          {/* Author/Team Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src="https://via.placeholder.com/150"  // Replace with actual image
                alt="Author Name"
              />
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-800">Author Name</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Hello! I'm [Author Name], the founder of [Your Website Name]. With a passion for [industry or field], I created this platform to offer high-quality products and exceptional shopping experiences. I'm committed to ensuring that every customer feels valued and satisfied with their purchase.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19.5c5.5 0 8.9-3.1 8.9-8.8 0-4.4-2.8-8.1-6.7-9.4-.5-.1-.7-.3-.7-.6v-1.3c0-.3.2-.6.6-.6 2.1 0 4 .8 5.5 2.1 1.5-1.3 3.4-2.1 5.5-2.1.3 0 .6.2.6.6v1.3c0 .3-.2.5-.7.6-3.9 1.3-6.7 5-6.7 9.4 0 2.1.7 4.1 1.9 5.7l1.1 1.1c-1.2.1-2.5.2-3.8.2-1.2 0-2.5-.1-3.7-.2l1.1-1.1c1.2-1.6 1.9-3.6 1.9-5.7 0-4.8-3.4-8.8-8.9-8.8-1.3 0-2.6.2-3.8.6-.3.1-.6.2-.6.5v1.1c0 .3.3.6.7.6 4.5 0 8.1 3.3 8.1 7.6s-3.6 7.6-8.1 7.6c-2.4 0-4.6-.8-6.4-2.2-.2-.2-.4-.5-.4-.8v-1.5c0-.3.2-.6.6-.6 2.1 0 4-.8 5.5-2.1 1.5 1.3 3.4 2.1 5.5 2.1.3 0 .6-.2.6-.6v-1.3c0-.3-.2-.5-.7-.6-3.9-1.3-6.7-5-6.7-9.4 0-2.1.7-4.1 1.9-5.7l1.1-1.1c-1.2-.1-2.5-.2-3.8-.2-1.2 0-2.5.1-3.7.2l1.1 1.1c1.2 1.6 1.9 3.6 1.9 5.7 0 4.8 3.4 8.8 8.9 8.8z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h8zM4 8a6 6 0 0 0-4 6v4a6 6 0 0 0 4 6h8a6 6 0 0 0 4-6v-4a6 6 0 0 0-4-6H4z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
