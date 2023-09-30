"use client";
import { useCart } from "@context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {  useState } from "react";

function Navbar({ products, onSearch }) {
  const { cart } = useCart();
  const [searchInput, setSearchInput] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = () => {
    console.log(searchInput);
    onSearch(searchInput);
  };
  const handleClearSearch = () => {
    setSearchInput("");
    onSearch("");
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">Grocery Shop</div>
        <div className="lg:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={toggleSearch}
          >
            &#8801;
          </button>
        </div>
        <div className={`lg:flex space-x-4 ${isSearchOpen ? "hidden" : "flex"}`}>
          <a href="#" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Contact
          </a>
        </div>
        <div className={`lg:flex space-x-4 ${isSearchOpen ? "flex" : "hidden"}`}>
          <input
            value={searchInput}
            onChange={handleSearchInputChange}
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md p-1 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-gray-600 hover:bg-gray-700  text-white font-bold ml-2 py-1 px-2 rounded"
          >
            Search
          </button>
          {searchInput && (
            <button
              onClick={handleClearSearch}
              className="bg-gray-600 hover:bg-gray-700  text-white font-bold ml-2 py-1 px-2 rounded"
            >
              Clear
            </button>
          )}
        </div>
        <Link href="/cart">
          <div className="hover:bg-gray-700 p-1 rounded text-white text-lg mr-2">
            <FontAwesomeIcon icon={faCartShopping} />
            {
              <span className="bg-red-500 text-white absolute top-0 right-15 rounded-full p-1 text-xs">
                {cart.reduce((total, item) => total +  item.quantity, 0)}
              </span>
            }
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
