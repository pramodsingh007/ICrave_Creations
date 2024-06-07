import React from 'react';
import Image8 from '../assets/img8.jpg';

const AboutUsSection = () => {
  return (
    <div className="bg-gray-100 py-16" id='about'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            We are passionate about creating beautiful spaces that inspire and delight. Our team of talented designers
            is dedicated to bringing your vision to life.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={Image8} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to create spaces that reflect the unique personalities and lifestyles of our clients.
              Whether it's a cozy home or a vibrant workspace, we strive to make every project exceptional.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Experienced and creative designers</li>
              <li>Attention to detail</li>
              <li>Customer satisfaction is our priority</li>
              <li>Unique and innovative designs</li>
              <li>Collaborative approach</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
