import React from "react";
import AdminHead from "../../components/admin/AdminHead";
import Products from '../../components/admin/Products'
import { useEffect, useState } from "react";

const GetProducts = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);

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

  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const AddProduct = (event) => {
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
        // allert if product added successful
        alert("Product added successful");
      })
      .catch((error) => {
        console.error(error);
        //  error please try again
      });
  };


















  return (
    <>
      <div className="flex">
        <AdminHead />
        <div className="w-full">
          <div className="flex justify-center">
            <div className="w-3/4">
              <div className="flex justify-between">
				<div className="absolute top-[10%] left-[25%] w-1/2 rounded-lg m-5">
        <button
          onClick={() => setShowModalAdd(true)}
          className="flex items-center justify-center w-40 px-4 py-2 text-sm font-medium text-white bg-[#AACB73] rounded-md"
        >
          + Add Product
        </button>
      </div>
              </div>
            </div>
          </div>
        </div>
		<Products/>
      </div>

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
                onSubmit={AddProduct}
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
};

export default GetProducts;


