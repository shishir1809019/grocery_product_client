import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const itemCount = 15

function Navbar({itemCount=0}) {
  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-semibold">
          My Website
        </div>

        {/* Mobile Menu (Hidden on Laptop) */}
        <div className="lg:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            // onClick={() => {
            //   // Toggle mobile menu visibility
            //   // Implement your own logic here (e.g., show/hide a mobile menu)
            // }}
          >
            &#8801;
          </button>
        </div>

        {/* Laptop Menu (Hidden on Mobile) */}
        <div className="hidden lg:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-200">Home</a>
          <a href="#" className="text-white hover:text-gray-200">About</a>
          <a href="#" className="text-white hover:text-gray-200">Services</a>
          <a href="#" className="text-white hover:text-gray-200">Contact</a>
        </div>

        {/* Search Input (Hidden on Mobile) */}
        <div className="hidden lg:block">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md p-1 focus:outline-none"
          />
        </div>
        <div className='text-white text-lg mr-2'>
          <FontAwesomeIcon icon="shopping-cart" /> 
          {itemCount > 0 && (
            <span className="bg-red-500 text-white absolute top-0 right-15 rounded-full p-1 text-xs">
              {itemCount}
            </span>
        )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
