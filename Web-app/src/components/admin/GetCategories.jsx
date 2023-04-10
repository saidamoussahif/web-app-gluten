import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

function GetCategories() {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  // get categories

  const getCategories = async () => {
    const response = await fetch("http://localhost:9090/api/categories/getAll");
    const data = await response.json();
    setCategory(data);
  };
  useEffect(() => {
    getCategories();
  });
  // add category
  const addCategory = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:9090/api/categories/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        description: e.target.description.value,
      }),
    });
    console.log(response);
    getCategories();
    setShowModalAdd(false);
  };
  // delete category
  const deleteCategory = async (id) => {
    const response =await axios.delete(
      `http://localhost:9090/api/categories/delete/${id}`,
    );
    console.log(response);
    const newCategoryList = category.filter((category) => {
      return category._id !== id;
    });
    setCategory(newCategoryList);
  };




  return (
    <>
      {/* display categories */}
      <div class="flex items-center px-2 py-2 text-xl">
        <button
          class="bg-[#AACB73] text-white px-2 py-2 rounded-md"
          onClick={() => setShowModalAdd(true)}
        >
          + Add category
        </button>
      </div>
      <main>
        <div class="w-full md:px-40 mx-auto py-20">
          <div class="md:grid lg:grid-cols-3 md:grid-cols-2 mlg:grid-cols-3 md:gap-10 space-y-6 md:space-y-0 px-10 md:px-0 mx-auto">
            {category.map((value, index) => {
              return (
                <div class="bg-gray-50 p-6 shadow-md rounded-md">
                  <div key={index}>
                    <h3 class="text-xl text-gray-800 font-semibold mb-3">
                      Product Category
                    </h3>
                    <h1 class="mb-2">
                      Name of category:
                      <span className="font-bold pl-5 text-[#AACB73]">
                        {value.name}
                      </span>
                    </h1>
                    <p class="my-4">
                      Description:
                      <span className="pl-5">{value.description}</span>
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        deleteCategory(category._id);
                      }}
                      className="text-red-500 hover:text-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
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
                      //   onClick={() => setShowModalEdit(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
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
              );
            })}
          </div>
        </div>
      </main>

      {/* Add category */}

      {showModalAdd ? (
        <>
          <div className="min-h-screen w-screen flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-900 bg-opacity-50 outline-none focus:outline-none">
            <div className="bg-white rounded-md border-t-4 p-24">
              <div className="flex justify-center items-center">
                <h1 className="font-bold text-3xl flex items-baseline pl-8 mb-8 text-[#AACB73]">
                  Add New Category
                </h1>
                </div>
                <form className="flex flex-col justify-center items-center"
                onSubmit={addCategory}
                >
                <div className="mb-8">
                  <label
                    for="name"
                    className="text-sm text-navy-700 dark:text-white font-bold"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={
                      name
                    }
                    onChange={
                      (e) => setName(e.target.value)
                    }
                    placeholder="enter category name"
                    className="mt-2 flex h-12 w-96 items-center justify-center outline outline-1 rounded-xl border bg-white/0 p-3 text-sm border-gray-100"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="description"
                    className="text-sm text-navy-700 dark:text-white font-bold"
                  >
                    Category Description
                  </label>
                  <textarea
                    type="text"
                    value={
                      description
                    }
                    onChange={
                      (e) => setDescription(e.target.value)
                    }
                    id="description"
                    placeholder="describe category"
                    className="mt-2 flex h-12 w-96 items-center justify-center outline outline-1 rounded-xl border bg-white/0 p-3 text-sm border-gray-100"
                  />  
                </div>

                  <div className="flex justify-center items-center mt-8">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-[10px]"
                      type="submit"
                    >
                      Add Category
                    </button>

                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-[10px] ml-4"
                      type="button"
                      onClick={() => setShowModalAdd(false)}
                    >
                      Cancel
                    </button>
                    </div>
            </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default GetCategories;
