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
      <div className="absolute w-full h-full top-[8%]">
        {/* Navigation starts */}
        <nav className="w-full mx-auto bg-white shadow">
          <div className="container  justify-between h-16 flex items-center lg:items-stretch mx-auto">
            <h4 className="text-2xl font-bold leading-tight text-gray-800">
              Welcome 👋 To Your Account!!
            </h4>
            <div className=" flex items-center justify-end gap-9 px-9">
              <a
                href="/dashboard"
                className="text-base flex-shrink-0 flex items-end justify-end p-2 rounded-xl hover:underline focus:ring"
              >
                Dashboard
              </a>
              <a
                href="/items"
                className="text-base flex-shrink-0 flex items-end justify-end hover:underline  p-2 rounded-xl"
              >
                Items
              </a>
              <a
                href="/users"
                className="text-base flex-shrink-0 flex items-end justify-end hover:underline p-2 rounded-xl"
              >
                Users
              </a>
              <a
                href="/orders"
                className="text-base flex-shrink-0 flex items-end justify-end hover:underline p-2 rounded-xl"
              >
                Orders
              </a>
              <div className="mt-6 lg:mt-0">
                <button
                  onClick={id ? logout : null}
                  className="mx-2 my-2 bg-[#AACB73] transition duration-150 ease-in-out focus:outline-none hover:text-black rounded text-white px-6 py-2 text-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
