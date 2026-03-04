import React from 'react';
import { Div } from '../common/Div';

export const Nav = () => {
  // Define an array of navigation links
 const navLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammed-fahiz-k/' },
  { name: 'GitHub', href: 'https://github.com/MuhammedFahizk' },
  { name: 'Download Resume', href: 'https://res.cloudinary.com/dnqx8sqdw/image/upload/v1772621333/Muhammed_Fahiz-Resume_qb2n4g.pdf' },
];


  return (
    <Div className="fixed px-4 md:ps-10 pe-5 z-50 h-14 w-full ">
      <div className="flex justify-between items-center h-full">
        {/* Brand Name */}
        <h3 className="text-primary text-lg font-Acme"><span className='text-secondary font-Bubblegum text-3xl'>F</span>ahiz-k</h3>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md text-secondary font-Acme hover:text-gray-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </Div>
  );
};
