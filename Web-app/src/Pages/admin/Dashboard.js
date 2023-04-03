import React from "react";
import AdminHead from "../../components/admin/AdminHead";
import axios from "axios";
import { useState, useEffect } from "react";

function Dashboard() {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [productsList, setProducts] = useState([]);
// get categories
const [categories, setCategory] = useState([]);
  const getCategories = async () => {
    const response = await fetch(
      // "http://192.168.9.33:9090/api/categories/getAll"
      "http://localhost:9090/api/categories/getAll"
    );
    const data = await response.json();
    setCategory(data);
  };
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        "http://localhost:9090/api/products/getAll"
      );
      setProducts(response.data);
    };
    getProduct();
    // isset(token);
    getCategories();
  }, []);

  // delete product
  const deleteProduct = async (id) => {
    const response = await axios.delete(
      `http://localhost:9090/api/products/${id}`
    );
    console.log(response);
    const newProductList = productsList.filter((product) => {
      return product._id !== id;
    });
    setProducts(newProductList);
  };

  // add product
  // const addProduct = async (id) => {
  //   const response = await axios.post(
  //     `http://localhost:9090/api/products/add`
  //   );
  //   console.log(response);
  //   const newProductList = productsList.filter((product) =>
  //   {
  //     return product._id !== id;
  //   });
  //   setProducts(newProductList);
  // };


  // update product
  const updateProduct = async (id) => {
    const response = await axios.put(
      `http://localhost:9090/api/products/${id}`
    );
    console.log(response);
    const newProductList = productsList.filter((product) => {
      return product._id !== id;
    });
    setProducts(newProductList);
  };


  return (
    <>
      <AdminHead />
      {/* button add product */}
      <div className="absolute top-[27%] left-1/4 w-1/2 rounded-lg m-5">
        <button
          onClick={() => setShowModalAdd(true)}
          className="flex items-center justify-center w-40 px-4 py-2 text-sm font-medium text-white bg-[#AACB73] rounded-md"
        >
          + Add Product
        </button>
      </div>

      <div className=" absolute top-1/3 left-1/4 w-1/2 rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-10 py-8 font-medium text-gray-900">
                IMAGE
              </th>
              <th scope="col" className="px-10 py-8 font-medium text-gray-900">
                CATEGORY
              </th>
              <th scope="col" className="px-10 py-8 font-medium text-gray-900">
                NAME
              </th>
              <th scope="col" className="px-10 py-8 font-medium text-gray-900">
                QUANTITY
              </th>
              <th scope="col" className="px-10 py-8 font-medium text-gray-900">
                PRICE
              </th>
              <th scope="col" className="px-10 py-8 font-medium text-gray-900">
                DESCRIPTION
              </th>
              <th scope="col" className="px-10 py-8 font-medium text-gray-900">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {productsList.map((product) => (
              <tr className="hover:bg-gray-50" key={product._id}>
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="relative h-56 w-56">
                    <img
                      className="roundeded-md object-cover object-center"
                      src={`http://localhost:9090/img/${product.image}`}
                      alt=""
                    />
                  </div>
                </th>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-center">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">{product.productName}</td>
                <td className="px-6 py-4 text-center">{product.quantity}</td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center gap-4 rounded-full px-2 py-1 text-xs font-semibold">
                    {product.price}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-4 rounded-full px-2 py-1 text-xs font-semibold text-center">
                    {product.description}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={() => {
                        deleteProduct(product._id);
                      }}
                      className="text-red-500 hover:text-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                    <button
                      x-data="{ tooltip: 'Edite' }"
                      className="text-blue-500 hover:text-blue-600"
                      onClick={() => setShowModalEdit(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
                    onSubmit={updateProduct}
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
                      <option selected>Categories</option>
                      {
                        categories.map((category) => (
                          <option value={category._id}>{category.name}</option>
                        ))
                      }
                    </select>
                    <label className="block text-[#060047] text-sm font-bold mb-1">
                      Name of product
                    </label>
                    <input
                      type="text"
                      onChange={
                        (e) => setProducts({ ...productsList, name: e.target.value })
                      }
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-[#060047]"
                    />
                    <label className="block text-[#060047] text-sm font-bold mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      onChange={
                        (e) => setProducts({ ...productsList, quantity: e.target.value })
                      }
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-[#060047]"
                    />
                    <label className="block text-[#060047] text-sm font-bold mb-1">
                      Image
                    </label>
                    <input
                      type="file"
                      onChange={
                        (e) => setProducts({ ...productsList, image: e.target.files[0] })
                      }
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-[#060047]"
                    />
                    <label className="block text-[#060047] text-sm font-bold mb-1">
                      Description
                    </label>
                    <textarea
                      type="text"
                      onChange={
                        (e) => setProducts({ ...productsList, description: e.target.value })
                      }
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

      {showModalAdd ? (
        <>
         <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div className="w-full h-full bg-gray-50 z-0 absolute inset-0" />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-indigo-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-center">
                <p className="text-xl font-semibold text-indigo-500">
                  Create your account
                </p>
                <button
                    className="bg-transparent border-0 text-[#060047] float-right"
                    onClick={() => setShowModalAdd(false)}
                  >
                    <span className="text-[#7f9b52] font-bold opacity-7 h-6 w-6 text-2xl block">
                      x
                    </span>
                  </button>
              </div>
              <div className="px-4 md:px-10 pt-2 md:pt-8 md:pb-4 pb-4">
                <div className="flex items-center justify-center">
                  <div className="p-16 rounded-md flex items-center justify-center">
                    {/* <img src={icon} alt="user" width={40} height={40} /> */}
                  </div>
                </div>
                <form className="mt-8">
                  <div className="flex items-center space-x-9">
                    <input
                      placeholder="Full Name"
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      type="text"
                      required
                    />
                    <input
                      placeholder="Phone"
                      type="number"
                      min={0}
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-9 mt-8">
                    <input
                      placeholder="CIN"
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      type="text"
                      required
                    />
                    <input
                      placeholder="Address"
                      type="text"
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-9 mt-8">
                    <input
                      placeholder="Email"
                      type="email"
                      required
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
                    <input
                      placeholder="Password"
                      type="password"
                      required
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
                  </div>
                </form>
                <div className="flex justify-between mt-9">
                  <a
                    href="/login"
                    className="flex items-start justify-start py-3 text-indigo-600 underline hover:bg-opacity-80  text-sm"
                  >
                    Already have an account!
                  </a>
                  <button
                    type="submit"
                    className="flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-opacity-80 shadow rounded text-sm text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </>
      ) : null}




    </>
  );
}

export default Dashboard;
