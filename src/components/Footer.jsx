import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center">
          <div className="flex justify-center md:justify-start mb-8 md:mb-0">
            <span className="text-indigo-400 font-semibold text-xl">Harmony Homes</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">123 Koregaon Park, Pune, India</p>
            <p className="text-gray-400 mb-4">contact@example.com</p>
            <div className="flex justify-center md:justify-end">
              <a href="#" className="text-gray-400 hover:text-indigo-400 px-3 py-1">
              <img width="24" height="24" src="https://img.icons8.com/fluency/24/instagram-new.png" alt="instagram-new"/>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 px-3 py-1">
              <img width="24" height="24" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 px-3 py-1">
              <img width="24" height="24" src="https://img.icons8.com/color/24/twitter--v1.png" alt="twitter--v1"/>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-center text-gray-400 mb-4 md:mb-0">&copy; 2024 Harmony Homes. All rights reserved.</p>
          <div className="flex justify-center md:justify-end">
            <a href="#" className="text-gray-400 hover:text-indigo-400 px-3 py-1">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 px-3 py-1">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
