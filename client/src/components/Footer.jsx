import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-blue-100">
              Morocco Weather provides accurate and up-to-date weather information for cities across Morocco.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="/cities" className="text-blue-100 hover:text-white transition-colors">Cities</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-400 text-center">
          <p>&copy; 2024 Morocco Weather. All rights reserved. &copy </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

