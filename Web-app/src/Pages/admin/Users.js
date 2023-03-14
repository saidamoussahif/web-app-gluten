import React from "react";
import Header from "../../components/admin/Header";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [usersList, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "http://localhost:9090/api/users/getAll"
      );
      setUsers(response.data);
    };
    getUsers();
  }, []);
  return (
    <>
      <Header />
      <div className=" absolute top-1/4 left-1/4 w-1/2 rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-[#cae897] bg-transparent">
            <tr>
              <th scope="col" className="px-6 py-8 font-medium text-gray-900 text-center">
                FULLNAME
              </th>
              <th scope="col" className="px-6 py-8 font-medium text-gray-900 text-center">
                EMAIL
              </th>
              <th scope="col" className="px-6 py-8 font-medium text-gray-900 text-center">
                PHONE
              </th>
              <th scope="col" className="px-6 py-8 font-medium text-gray-900 text-center">
                ROLE
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {usersList.map((user) => (
              <tr className="hover:bg-gray-50" key={user._id}>
                <td className="px-6 py-8">
                  <span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-center">
                    {user.fullname}
                  </span>
                </td>
                <td className="px-12 py-8 text-center">{user.email}</td>
                <td className="px-10 py-8 text-center">{user.phone}</td>
                <td className="px-10 py-8 text-center">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
