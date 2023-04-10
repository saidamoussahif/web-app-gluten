import React from "react";
import AdminHead from "../../components/admin/AdminHead";
import axios from "axios";
import { useState, useEffect } from "react";
// import GetProducts from "../../components/admin/Products";
import GetCategories from "../../components/admin/GetCategories";
// import Categories from "../../components/MainPage/Categories";

function Dashboard() {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [productsList, setProducts] = useState([]);
  // get categories
  const [categories, setCategory] = useState([]);
  const getCategories = async () => {
    const response = await fetch("http://localhost:9090/api/categories/getAll");
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
    getCategories();
  }, []);
  

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
  // delete product
  // const deleteProduct = async (id) => {
  //   const response = await axios.delete(
  //     `http://localhost:9090/api/products/${id}`
  //   );
  //   console.log(response);
  //   const newProductList = productsList.filter((product) => {
  //     return product._id !== id;
  //   });
  //   setProducts(newProductList);
  // };
  return (
    <>

      <div class="flex">
        <AdminHead />
        <main class="min-h-screen w-full">
          <nav class="flex justify-between px-10 bg-white py-6">
            <div class="flex items-center px-4 py-2 text-3xl font-bold">
              Welcome 👋 To Your Account!!
            </div>
          </nav>
        <GetCategories/>  
        </main>
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
                      {categories.map((category) => (
                        <option value={category._id}>{category.name}</option>
                      ))}
                    </select>
                    <label className="block text-[#060047] text-sm font-bold mb-1">
                      Name of product
                    </label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setProducts({ ...productsList, name: e.target.value })
                      }
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-[#060047]"
                    />
                    <label className="block text-[#060047] text-sm font-bold mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      onChange={(e) =>
                        setProducts({
                          ...productsList,
                          quantity: e.target.value,
                        })
                      }
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-[#060047]"
                    />
                    <label className="block text-[#060047] text-sm font-bold mb-1">
                      Image
                    </label>
                    <input
                      type="file"
                      onChange={(e) =>
                        setProducts({
                          ...productsList,
                          image: e.target.files[0],
                        })
                      }
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-[#060047]"
                    />
                    <label className="block text-[#060047] text-sm font-bold mb-1">
                      Description
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) =>
                        setProducts({
                          ...productsList,
                          description: e.target.value,
                        })
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


    </>
  );
}

export default Dashboard;
