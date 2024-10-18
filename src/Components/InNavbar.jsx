import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav
        className="bg-black text-white fixed top-0 left-0 right-0 z-50 py-3"
        style={{ height: "60px" }}
      >
        <div className="px-[2rem] flex items-center justify-between">
          {/* Left: Logo */}
          <div className="text-xl font-bold">LOGO</div>

          {/* Right: Apply Now Button */}
          <div>
            <button className="bg-[#00cc99] text-white px-8 py-1 rounded-full hover:bg-gray-300 transition">
              Apply Now
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
