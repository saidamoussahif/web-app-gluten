import React from "react";
import AdminHead from "../../components/admin/AdminHead";
import axios from "axios";
import { useState, useEffect } from "react";
import GetProducts from "../../components/admin/GetProducts";
import Categories from "../../components/MainPage/Categories";

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
    getCategories();
  }, []);

  // Add product
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("category", categories);
    formData.append("productName", productName);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);

    fetch(`http://localhost:9090/api/products/create`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
      <AdminHead />
      <section className="text-gray-600 body-font">
        <div className="container py-24 mx-auto">
          <div className="flex gap-12 mt-48">
            <div className="xl:w-1/3 md:w-1/2 m-4">
                {categories.map((category) => {
                  return (
                    <div className="border border-gray-200 p-6 rounded-lg">
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                        {/* Total Categories:       {categories.length} */}
                        Category Name :
                        {category.name}
                      </h2>
                      <p className="leading-relaxed text-base">
                        Description Category :{category.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      {/* <GetProducts /> */}
      {/* button add product */}
      <div className="absolute top-[25%] left-[10%] w-1/2 rounded-lg m-5">
        <button
          onClick={() => setShowModalAdd(true)}
          className="flex items-center justify-center w-40 px-4 py-2 text-sm font-medium text-white bg-[#AACB73] rounded-md"
        >
          + Add Product
        </button>
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

      {showModalAdd ? (
        <>
          <div className="min-h-screen w-screen flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-900 bg-opacity-50 outline-none focus:outline-none">
            <div className="bg-white rounded-md border-t-4 p-24">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-3xl flex items-baseline pl-8">
                  Add New Product
                </h1>
                <button
                  className="bg-transparent border-0 text-[#060047] float-right"
                  onClick={() => setShowModalAdd(false)}
                >
                  <span className="text-red-500 font-bold opacity-7 h-6 w-6 text-3xl relative top-0 right-1">
                    X
                  </span>
                </button>
              </div>
              <form
                className="grid max-w-3xl gap-2 py-10 px-8 sm:grid-cols-2  border-purple-400"
                onSubmit={handleSubmit}
              >
                <div className="grid">
                  <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                    <input
                      type="text"
                      value={productName}
                      onChange={(event) => setProductName(event.target.value)}
                      className="peer block border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0 w-72"
                      placeholder="Product name"
                    />
                    <label
                      html="product-name"
                      className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                    >
                      Product name
                    </label>
                  </div>
                </div>
                <div className="grid">
                  <div className="bg-white first:flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                    <input
                      type="number"
                      value={quantity}
                      onChange={(event) => setQuantity(event.target.value)}
                      className="peer block w-72 border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                      placeholder="quantity"
                    />
                    <label
                      html="quantity"
                      className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                    >
                      Quantity
                    </label>
                  </div>
                </div>
                <div className="grid">
                  <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 shadow-sm focus-within:shadow-inner">
                    <select
                      required
                      className="w-72 p-3 px-1 block text-gray-400 text-base"
                    >
                      <option selected>Categories</option>
                      {categories.map((category) => (
                        <option value={category._id}>{category.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid">
                  <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                    <input
                      type="number"
                      value={price}
                      onChange={(event) => setPrice(event.target.value)}
                      className="peer block w-72 border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                      placeholder="Price"
                    />
                    <label
                      html="price"
                      className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                    >
                      Price
                    </label>
                  </div>
                </div>
                <div className="grid">
                  <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                    <input
                      type="file"
                      onChange={(event) => setImage(event.target.files[0])}
                      className="peer block w-72 border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                      placeholder="Image"
                    />
                    <label
                      html="image"
                      className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                    >
                      Image
                    </label>
                  </div>
                </div>
                <div className="grid">
                  <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                    <textarea
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      className="peer block w-72 border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                      placeholder="Description"
                    />
                    <label
                      html="description"
                      className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                    >
                      Description
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-12 bg-[#7f9b52] text-white py-2 px-6 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Dashboard;
