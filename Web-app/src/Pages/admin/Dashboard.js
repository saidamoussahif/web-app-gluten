import React from "react";
import Header from "../../components/admin/Header";
import axios from "axios";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router";

const Dashboard = () => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [productsList, setProducts] = useState([]);

  // const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // const isset = (token) => {
  //   if (!token) {
  //     navigate("/login");
  //   }
  // };

  // delete product

  // const deleteProduct = async (id) => {
  //   const response = await axios.delete(
  //     `http://192.168.9.33:9090/api/products/delete/${id}`
  //   );
  //   console.log(response);
  //   const newProducts = productsList.filter((product) => product.id !== id);
  //   setProducts(newProducts);
  // };


  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        "http://192.168.9.33:9090/api/products/getAll"
      );
      setProducts(response.data);
    };
    getProduct();
    // isset(token);
  }, []);



  return (
    <div>
      <Header />
      <section className="dark:bg-gray-900 absolute top-1/4">
        <div className="container px-6 py-10 mx-auto">
          <div className="grid grid-cols-2 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {productsList.map((product) => (
              <div className="lg:flex border border-[#b9d38f] rounded-md p-10 bg-[#fdfff8]">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <h1 className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                    {product.name}
                  </h1>
                  <span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Quantity:{" "}
                    </span>
                    {product.quantity}
                  </span>
                  <span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Price:{" "}
                    </span>
                    {product.price}
                  </span>
                  <span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Category:{" "}
                    </span>
                    {product.category}
                  </span>
                  <span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Description:{" "}
                    </span>
                    {product.description}
                  </span>
                  <div className="flex items-center justify-start gap-6 mt-6">
                    <button
                      x-data="{ tooltip: 'Delete' }"
                      className="text-red-700"
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
                      className="text-blue-700"
                      x-data="{ tooltip: 'Edite' }"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Dashboard;
