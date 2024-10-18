import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"; // Search icon from react-icons
import { items } from "./CountriesData"; // Import the data for your items
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchActive, setSearchActive] = useState(false); // To toggle the search results
  const [searchQuery, setSearchQuery] = useState(""); // Store the search input
  const navigate = useNavigate(); // Hook to navigate

  const handleItemClick = (link) => {
    console.log(`Navigating to: ${link}`); // Debugging log
    if (link) {
      navigate(link);
    } else {
      console.error("Link is not defined for the clicked item.");
    }
  };

  // Add scroll event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle input change in search bar
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query
  };

  // Filter items based on search query (case insensitive)
  const filteredItems = searchActive
    ? items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items; // Show all items when search is active

  return (
    <div>
      {/* Navbar Section */}
      <nav
        className={`bg-black text-white ${
          isSticky ? "fixed top-0 left-0 right-0 z-50 py-4" : "relative pt-8"
        }`}
      >
        <div className="px-[2rem] flex items-center justify-between">
          {/* Left: Logo */}
          <div className="text-xl font-bold">LOGO</div>

          {/* Right: Apply Now Button */}
          <div>
            <button className="bg-[#00cc99] text-white px-4 py-2 rounded-full hover:bg-gray-300 transition">
              Apply Now
            </button>
          </div>

          {/* Center: Search Bar when sticky (only for large screens) */}
          {isSticky && (
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden max-[600px]:hidden lg:flex items-center justify-center border border-gray-400 rounded-full w-full max-w-lg p-2 bg-white">
              <FaSearch className="text-gray-500 mx-2" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full bg-white outline-none text-black px-2 py-1 rounded-full"
                onChange={handleSearchChange} // Show search results on input change
                onFocus={() => setSearchActive(true)} // Show search results when focused
                onBlur={() => setTimeout(() => setSearchActive(false), 200)}
              />
            </div>
          )}
        </div>

        {/* Mobile view: Search bar (when sticky) */}
        {isSticky && (
          <div className="flex justify-center px-[2rem] lg:hidden mt-4">
            <div className="flex items-center justify-center border border-gray-400 rounded-full w-[20rem] p-2 bg-white">
              <FaSearch className="text-gray-500 mx-2" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full bg-white outline-none text-black px-2 py-1 rounded-full"
                onChange={handleSearchChange} // Show search results on input change
                onFocus={() => setSearchActive(true)} // Show search results when focused
                onBlur={() => setSearchActive(false)} // Hide search results when unfocused (optional)
              />
            </div>
          </div>
        )}

        {/* Main Content Section (visible only when not sticky) */}
        {!isSticky && (
          <div className="bg-black text-white flex flex-col py-4 items-center justify-center">
            {/* Main Heading */}
            <h4 className="text-[1rem] font-[500] text-center text-[#00cc99]">
              99.2% Visas on Time
            </h4>
            {/* Subheading */}
            <h1 className="text-4xl text-center text-white mt-2 font-bold max-[600px]:text-2xl">
              Get Your Visa on Time with Atlys
            </h1>

            {/* Search Bar below heading (before sticky) */}
            <div
              className={`flex items-center justify-center mt-11 border border-gray-400 rounded-full w-[24rem] max-[600px]:w-[20rem] p-2 bg-white transition-all duration-300 ${
                isSticky ? "mb-0" : "mb-[-2.5rem]"
              }`}
            >
              <FaSearch className="text-gray-500 mx-2" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full bg-white outline-none text-black px-2 py-1 rounded-full"
                onChange={handleSearchChange} // Show search results on input change
                onFocus={() => setSearchActive(true)} // Show search results when focused
                onBlur={() => setTimeout(() => setSearchActive(false), 200)} // Hide search results when unfocused (optional)
              />
            </div>
          </div>
        )}
      </nav>

      {/* Display Search Results */}
      {searchActive && (
        <div className="absolute z-50 left-1/2 transform -translate-x-1/2 w-[25rem] mt-[2rem] bg-white p-4 rounded-2xl border border-gray-300 shadow-lg overflow-y-auto max-h-[23rem] mx-auto">
          {/* Popular Related Searches Heading */}
          <h3 className="text-[1rem] font-[600] text-gray-500 mb-2 text-left px-2">
            Most Popular Related Searches
          </h3>

          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-all"
                onClick={() => handleItemClick(item.link)} // Redirect to item's page on click
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div className="text-left">
                  <h3 className="text-md font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center w-full">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
