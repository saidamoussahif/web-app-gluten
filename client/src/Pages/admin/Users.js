import React from "react";
// import Header from "../../components/Admin/Header";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  // const navigate = useNavigate();
  const [usersList, setUsers] = useState([]);
  // const token = localStorage.getItem("userToken");

  // const isset = (token) => {
  //   if (!token) {
  //     navigate("/login");
  //   }
  // };

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "http://localhost:9090/api/users/getAll"
      );
      setUsers(response.data);
    };
    getUsers();
    // isset(token);
  }, []);
  return (
    <>
      {/* <Header/> */}
      <div className="sm:px-6 absolute top-1/4 left-1/4 w-1/2">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-[#7f9b52] rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-normal text-white">
             List of User's accounts
            </p>
            <div>
             
              <button class="p-0 w-12 h-12 bg-white rounded-md  hover:bg-green-700 hover:text-white active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                 {/* <p>Add</p */}
                 <svg
                  viewBox="0 0 20 20"
                  enable-background="new 0 0 20 20"
                  class="w-6 h-6 inline-block text-green-700"
                >
                  <path
                    fill="#7f9b52"
                    d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-center pl-4">Fullname</th>
                <th className="font-normal text-center pl-12">Phone</th>
                <th className="font-normal text-center pl-12">Email</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {usersList.map((user) => (
                <tr
                  key={user.id}
                  className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                >
                  <td className="pl-4 cursor-pointer">
                    <p className="font-medium text-center">{user.fullname}</p>
                  </td>
                  <td className="pl-4 cursor-pointer">
                    <p className="font-medium text-center">{user.phone}</p>
                  </td>
                  <td className="pl-4 cursor-pointer">
                    <p className="font-medium text-center">{user.email}</p>
                  </td>
                  <td className="pl-4 cursor-pointer"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Users;
