import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHead = () => {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div class="flex w-2/5 md:w-1/4 h-screen bg-gray-50">
        <div class="mx-auto py-10">
          <h1 class="text-3xl font-bold mb-10 cursor-pointer text-[#AACB73] hover:text-[#739044] duration-150">
            Admin Panel
          </h1>
          <ul>
            <li class="flex space-x-2 mt-32 cursor-pointer hover:text-[#739044]duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-grid"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={4} y={4} width={6} height={6} rx={1} />
                <rect x={14} y={4} width={6} height={6} rx={1} />
                <rect x={4} y={14} width={6} height={6} rx={1} />
                <rect x={14} y={14} width={6} height={6} rx={1} />
              </svg>
              <a href="/dashboard" class="font-semibold cursor-pointer">
                Dashboard
              </a>
            </li>
            <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#739044] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-puzzle"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
              </svg>
              <a href="/products" class="font-semibold cursor-pointer">
                Products
              </a>
            </li>
            <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#739044] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-stack"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="12 4 4 8 12 12 20 8 12 4" />
                <polyline points="4 12 12 16 20 12" />
                <polyline points="4 16 12 20 20 16" />
              </svg>
              <a href="/orders" class="font-semibold cursor-pointer">
                Orders
              </a>
            </li>
            <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#739044] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <a href="/users" class="font-semibold cursor-pointer">
                Users
              </a>
            </li>
            <button
              onClick={id ? logout : null}
              class="w-full mt-32 bg-[#AACB73] rounded-full py-1.5 text-white"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminHead;
