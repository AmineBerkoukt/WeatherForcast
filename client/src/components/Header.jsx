import React, { useState } from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-8"> 
        <h1 className="text-2xl font-bold">My Fancy Header</h1> 
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;