import React, { useEffect, useState } from "react";
import Header from "../components/Headers/Header";
import axios from "axios";
import { useNavigate } from "react-router";

const FilterProduct = () => {
    //get category from url
    const category = window.location.pathname.split("/")[2];
    const [products, setProducts] = useState([]);
    const token = localStorage.getItem("userToken");
    const navigate = useNavigate();
    // console.log(category);
  
    useEffect(() => {
      const option = {
        method: "GET",
        url: `http://localhost:9090/api/products/getProductByCategory/${category}`,
      };
      axios(option)
        .then((res) => {
          // console.log(res.data);
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [category]);
  
    // add product to cart
    const addToCart = async() => {
      if (!token) {
        navigate("/login");
        alert("please log in to add to cart");
    }else{
        const option = {
          method: "POST",
          url: "http://localhost:9090/api/carts/addItemToCart",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: {
            productId: products.id,
            quantity: 1,
          },
        };
        axios(option)
          .then((res) => {
            console.log(res.data);
            alert("product added to cart");
          })
          .catch((err) => {
            console.log(err);
          });
    }
    };

  
  
  
    return (
      <>
        <Header />
        <body className="bg-white">
  {/* <!-- Title --> */}
  <div className="pt-16 bg-white">
  <h1 className="text-center text-2xl font-bold text-[#aacb73]">{category} Products</h1>
  </div>
  
  
  {/* <!-- Product List --> */}
  <section className="py-10 ">
    <div className="mx-auto grid w-4xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
      <article className="rounded-xl bg-gray-50 p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
          <div className="relative flex items-center overflow-hidden rounded-xl">
            <img
                  src={`http://localhost:9090/img/${product.image}`}
                  alt="product"
                  className="w-56 h-56"
                   />
          </div>
          <div className="mt-1 p-2">
            <h2 className="text-slate-700">
              {product.productName}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {product.description}
            </p>
  
            <div className="mt-3 flex items-end justify-between">
                <p className="text-lg font-bold">
                  {product.price}DH
                </p>
  
              <div className="flex items-center space-x-1.5 rounded-lg bg-[#aacb73] px-4 py-1.5 text-white duration-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <button
                  type="button"
                className="text-sm"
                // add product to cart
                onClick={() => addToCart(product)} 
                >Add to cart</button>
              </div>
            </div>
          </div>
      </article>
      ))}
      </div>
  </section>
  </body>
      </>
    );
  }


export default FilterProduct;