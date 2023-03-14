import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };




  return (
    <>
      <div className="absolute w-full h-full">
        {/* Navigation starts */}
        <nav className="w-full mx-auto bg-white shadow">
          <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
            <div className="h-full flex items-center">
              <div className=" flex items-center justify-end gap-9 px-9">
                <a
                  href="/dashboard"
                  className="text-base flex-shrink-0 flex items-end justify-end bg-[#AACB73] p-2 rounded-xl active:bg-[#AACB73] text-white focus:ring"
                >
                  Dashboard
                </a>
                <a
                  href="/items"
                  className="text-base flex-shrink-0 flex items-end justify-end hover:bg-[#AACB73] p-2 rounded-xl hover:text-white"
                >
                  Items
                </a>
                <a
                  href="/users"
                  className="text-base flex-shrink-0 flex items-end justify-end hover:bg-[#AACB73] p-2 rounded-xl hover:text-white"
                >
                  Users
                </a>
                <a
                  href="/orders"
                  className="text-base flex-shrink-0 flex items-end justify-end hover:bg-[#AACB73] p-2 rounded-xl hover:text-white"
                >
                  Orders
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* Navigation ends */}
        {/* Page title starts */}
        <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-800">
              Welcome 👋
              To Your Account!!
            </h4>
            {/* <span class="animate-waving-hand">👋🏻</span> */}
          </div>
          <div className="mt-6 lg:mt-0">
            <button
              onClick={id ? logout : null}
             className="mx-2 my-2 bg-[#7f9b52] transition duration-150 ease-in-out focus:outline-none hover:bg-[#cae897] hover:text-black rounded text-white px-6 py-2 text-sm">
              Logout
            </button>
          </div>
        </div>
        {/* Page title ends */}
        <div className="container mx-auto px-6">
          
        </div>
      </div>
    </>
  );
};

export default Header;