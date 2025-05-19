import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</a>
          <a href="/about-us" className="text-sm hover:underline">About Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
