import React from "react";
const img = require('../imgs/not_found.png') 

const ErrorPage = () => {
    return (
        <div className="h-screen">
            <div className="flex items-center justify-center py-12">
                <div className="bg-white flex items-center justify-center mx-4 md:w-2/3 ">
                    <div className="flex flex-col items-center py-16 ">
                        <img className="px-4 h-96 w-96 hidden md:block" src={img} alt="" />
                        <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">No signal here! we cannot find the page you are looking for </p>
                        <a href="/" className="h-10 w-44 border py-2 text-center rounded-md text-white text-base bg-[#aacb73] hover:bg-[#819c55] focus:outline-none focus:ring-2 focus:ring-opacity-50">Go Back</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
