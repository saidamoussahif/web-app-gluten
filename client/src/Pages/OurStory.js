import React from "react";
import NavBar from "../components/Client/NavBar";



const OurStory = () => {
  return (
    <>
      <NavBar />
      <div className="sm:px-6 absolute top-1/3 left-1/3">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-blue-800">
              Our Story
            </p>
          </div>
        </div>
        </div>
        
    </>
  );
};

export default OurStory;