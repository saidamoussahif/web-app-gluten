import React, { useEffect, useState } from "react";
import Header from "../components/Headers/Header";
import axios from "axios";
function FilterProduct() {
  
  //get category from url
  const category = window.location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);
  console.log(category);

  useEffect(() => {
    const option = {
      method: "GET",
      url: `http://localhost:9090/api/products/getProductByCategory/${category}`,
    };
    axios(option)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  return (
    <>
      <Header />
      {/* Render products by category here */}
      {/* <div>
        <h1>Products in category {category}</h1>
        <ul>
          {products.map((product) => (
            <div>
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </li>
              <img
                src={`http://localhost:9090/img/${product.image}`}
                alt="productImage"
              />
            </div>
          ))}
        </ul>
      </div> */}
      <body class="bg-white">
{/* <!-- Title --> */}
<div class="pt-16 bg-white">
<h1 class="text-center text-2xl font-bold text-[#aacb73]">{category} Products</h1>
</div>


{/* <!-- Product List --> */}
<section class="py-10 ">
  <div class="mx-auto grid w-4xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {products.map((product) => (
    <article class="rounded-xl bg-gray-50 p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div class="relative flex items-center overflow-hidden rounded-xl">
          <img
                src={`http://localhost:9090/img/${product.image}`}
                alt="Hotel Photo"
                class="w-56 h-56"
                 />
        </div>
        <div class="mt-1 p-2">
          <h2 class="text-slate-700">
            {product.productName}
          </h2>
          <p class="mt-1 text-sm text-slate-400">
            {product.description}
          </p>

          <div class="mt-3 flex items-end justify-between">
              <p class="text-lg font-bold">
                {product.price}DH
              </p>

            <div class="flex items-center space-x-1.5 rounded-lg bg-[#aacb73] px-4 py-1.5 text-white duration-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <button
                type="button"
              class="text-sm">Add to cart</button>
            </div>
          </div>
        </div>
      </a>
    </article>
    ))}
    </div>
</section>



  
</body>
    </>
  );
}

export default FilterProduct;
