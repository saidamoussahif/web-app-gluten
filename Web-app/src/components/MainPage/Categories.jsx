import React from "react";
import { useEffect, useState } from "react";

function Categories() {
  const [category, setCategory] = useState([]);
  const getCategories = async () => {
    const response = await fetch(
      "http://localhost:9090/api/categories/getAll"
    );
    const data = await response.json();
    setCategory(data);
  };
  useEffect(() => {
    getCategories();
  });
  return (
    <>
      <div className="catgrories d_flex">
        <span class="fa-solid fa-border-all"></span>
        <a className="justify-center items-center" href={`/getAll`}>
          All Products
        </a>
      </div>
      <div className="category">
        <div className="f_flex">
          <a className="font-bold" href="/">
            Categories
          </a>
        </div>
        {category.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <a href={`/category/${value.name}`}>{value.name}</a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
