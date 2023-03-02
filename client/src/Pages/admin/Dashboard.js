import React from "react";
import Header from "../../components/admin/Header"
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [productsList, setProducts] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isset = (token) => {
    if (!token) {
      navigate("/login");
    }
  };


  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        "http://localhost:9090/api/products/getAll"
      );
      setProducts(response.data);
    };
    getProduct();
    isset(token);
  }, []);

  return (
    <>
      <Header />

      <div className="sm:px-6 realtive top-1/3 left-1/4">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-blue-800">
              Products
            </p>
            <button class="p-0 w-12 h-12 bg-[#7f9b52] text-white  rounded-md active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                 <svg
                  viewBox="0 0 20 20"
                  enable-background="new 0 0 20 20"
                  class="w-6 h-6 inline-block text-white"
                >
                  <path
                    fill="#fff"
                    d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
                  />
                </svg>
              </button>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-xl leading-none text-gray-800">
                <th className="font-semibold text-center pl-4">Category</th>
                <th className="font-semibold text-center pl-12">
                  Name of Product
                </th>
                <th className="font-semibold text-center pl-12">Quantity</th>
                <th className="font-semibold text-center pl-12">Image</th>
                <th className="font-semibold text-center pl-12">Price</th>
                <th className="font-semibold text-center pl-12">Description</th>
                <th className="font-semibold text-center pl-4">Acions</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {productsList.map((product) => (
                <tr
                  key={product._id}
                  className="h-20 text-base leading-none text-gray-800 bg-white border-b border-t border-gray-100"
                >
                  <td className="pl-4 cursor-pointer">
                    <p className="font-medium text-center">
                      {/* {product.category.name} */}
                    </p>
                  </td>
                  <td className="pl-4 cursor-pointer">
                    <p className="font-medium text-center">
                      {product.productName}
                    </p>
                  </td>
                  <td className="pl-4 cursor-pointer">
                    <p className="font-medium text-center">
                      {product.quantity}
                    </p>
                  </td>
                  <td className="pl-4 cursor-pointer">
                    {/* <img
                src={product.image}
                className="font-medium text-center"
                alt="product"
              /> */}
                  </td>
                  <td className="pl-4 cursor-pointer">
                    <p className="font-medium text-center">{product.price}</p>
                  </td>
                  <td className="pl-4 cursor-pointer">
                    <p className="font-medium text-center">
                      {product.description}
                    </p>
                  </td>
                  <td className="pl-12 cursor-pointer">
                    <p className="font-medium text-center">
                      <button
                        onClick={() => setShowModalEdit(true)}
                        className="mx-2 my-2 bg-[#7f9b52] transition duration-150 ease-in-out focus:outline-none rounded text-white px-6 py-2 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        className="mx-2 my-2 bg-[#FF0032] transition duration-150 ease-in-out focus:outline-none rounded text-white px-6 py-2 text-sm"
                      >
                        Delete
                      </button>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showModalEdit ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-900 bg-opacity-40 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid bg-white rounded-t ">
                  <h3 className="text-3xl font-semibold text-[#7f9b52] text-center">
                    Edit Product
                  </h3>
                  <button
                    className="bg-transparent border-0 text-[#060047] float-right"
                    onClick={() => setShowModalEdit(false)}
                  >
                    <span className="text-[#7f9b52] font-bold opacity-7 h-6 w-6 text-2xl block">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    className="rounded px-8 pt-6 pb-8
                    w-full"
                  >
                    <label className="block text-[#060047] text-sm font-bold mb-1">
                      Categories
                    </label>
                    <select
                      id="agence_id"
                      required
                      className="shadow appearance-none border rounded w-full p-3 px-1 block text-[#060047] text-base mb-1"
                    >
                      <option selected>choose category</option>
                      <option>category 1</option>
                      <option>category 2</option>
                      <option>category 3</option>
                    </select>
                     <label className="block text-[#060047] text-sm font-bold mb-1">
                      Name of product
                    </label>
                    <input
                      type="text"
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-[#060047]"
                    />
                     <label className="block text-[#060047] text-sm font-bold mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-[#060047]"
                    />
                    <label className="block text-[#060047] text-sm font-bold mb-1">
                      Image
                    </label>
                    <input
                      type="file"
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-[#060047]"
                    />
                     <label className="block text-[#060047] text-sm font-bold mb-1">
                      Description
                    </label>
                    <textarea
                      type="text"
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-[#060047]"
                    />

                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-white font-bold bg-[#7f9b52] uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Dashboard;
