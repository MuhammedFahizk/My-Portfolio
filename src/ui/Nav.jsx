import React from 'react';
import { Div } from '../common/Div';

export const Nav = () => {
  // Define an array of navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About-Us', href: '#about' },
    { name: 'Service', href: '#service' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <Div className="fixed px-4 md:ps-10 pe-5 z-50 h-14 w-full ">
      <div className="flex justify-between items-center h-full">
        {/* Brand Name */}
        <h1 className="text-primary text-lg font-Acme">Fahiz-k</h1>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-md text-gray-500 font-Acme hover:text-gray-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </Div>
  );
};
