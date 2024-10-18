import React from "react";
import { FaRupeeSign } from "react-icons/fa"; // Import Rupee icon from react-icons
import ImageFormLayout from "./ImageFormLayout";
import { items } from "./CountriesData";
import ScrollReveal from "./ScrollReveal"; // Import the ScrollReveal component
import { useNavigate } from "react-router-dom";
const Home = () => {
  const renderGrid = () => {
    return (
      <div className="container mx-auto">
        <h1
          className="text-5xl max-[600px]:text-2xl text-center text-[#00cc99] font-[600]  py-6"
          style={{ WebkitTextStroke: "1px #00cc99", color: "transparent" }}
        >
          Come On! Find Out Your Right Place
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ScrollReveal key={item.id}>
              {" "}
              {/* Wrap each item with ScrollReveal */}
              <div className="rounded-xl cursor-pointer shadow-lg border border-gray-300 bg-white transition-transform duration-500 transform hover:shadow-2xl hover:scale-105">
                {/* Card Background Image */}
                <div className="overflow-hidden rounded-t-xl">
                  <div
                    className="bg-cover bg-center h-52 rounded-t-xl shadow-md"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  ></div>
                </div>

                {/* Card Content */}
                <div className="p-3 rounded-b-xl pb-5 transition-colors duration-300 bg-gray-300 group-hover:bg-[#00cc99]">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-black transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>
                    <div className="text-lg flex items-center text-black group-hover:text-white">
                      <FaRupeeSign className="mr-1" />
                      {item.price}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 pb-4 transition-colors duration-300 group-hover:text-white">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="know-more-button text-white border border-gray-600 px-6 py-2 text-[14px] rounded-full bg-[#00cc99] hover:bg-white hover:text-[#00cc99] transition-all duration-300"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative mx-3 flex flex-col">
      {/* Main Content */}
      <div className="flex-grow overflow-y-auto px-4 py-6">{renderGrid()}</div>
      <ImageFormLayout />
    </div>
  );
};

export default Home;
