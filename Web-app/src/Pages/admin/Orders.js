import React from "react";
import Header from "../../components/admin/Header"
import axios from "axios";
import { useState, useEffect } from "react";

function Orders() {
  
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [productsList, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        "http://localhost:9090/api/products/getAll"
      );
      setProducts(response.data);
    };
    getProduct();
    // isset(token);
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

  // edit product
  // const editProduct = async (id) => {
  //   const response = await axios.put(
  //     `http://localhost:9090/api/products/update/${id}`
  //   );
  //   console.log(response);
  //   const newProductList = productsList.filter((product) => {

  //     return product._id !== id;
  //   });
  //   setProducts(newProductList);
  // };

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


  return (
    <>
      <Header />
      <div className=" absolute top-1/4 left-1/4 w-1/2 rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
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
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              >
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {productsList.map((product) => (
            <tr className="hover:bg-gray-50"
            key={product._id}
            >
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-100 w-100">
                  <img
                    className="h-full w-full roundeded-md object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </th>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-center">
                  Categpry
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
                  onClick={
                    () => {
                      deleteProduct(product._id);
                    }
                  }
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
                  <button x-data="{ tooltip: 'Edite' }"
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
}

export default Orders;
