import React from "react";

const ErrorPage = () => {
    return (
        <div className="h-screen">
            <div className="flex items-center justify-center py-12">
                <div className="bg-white flex items-center justify-center mx-4 md:w-2/3 ">
                    <div className="flex flex-col items-center py-16 ">
                        <img className="px-4 hidden md:block" src="https://img.freepik.com/free-vector/monster-404-error-concept-illustration_114360-5485.jpg?size=338&ext=jpg&uid=R75764164&ga=GA1.1.1065634067.1658138070" alt="" />
                        <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">No signal here! we cannot find the page you are looking for </p>
                        <button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-yellow-400 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
