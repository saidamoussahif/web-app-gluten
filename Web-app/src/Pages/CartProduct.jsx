import Header from "../components/Headers/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";

const CartProduct = () => {
 
  // get product by id
  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    const option = {
      method: "GET",
      url: `http://localhost:9090/api/products/getProductById/1`,
    };
    axios(option)
      .then((res) => {
        console.log(res.data);
        setCartProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <>
      <Header />
      <body>
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              </div>
              {
                cartProduct.map((product)=>{
                  return(
                    <div className="flex mt-10 mb-5">
                      <div className="flex w-2/5">
                        <div className="w-20">
                          <img
                            className="h-24"
                            src={`http://localhost:9090/img/${product.image}`}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-between ml-4 flex-grow">
                          <span className="font-bold text-sm">
                            {product.name}
                          </span>
                          <span className="text-red-500 text-xs">
                            {product.category}
                          </span>
                          <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">
                            Remove
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-center w-1/5">
                        <button className="border text-gray-600 w-8 h-8 hover:text-red-500 hover:border-red-500 rounded-full">
                          -
                        </button>
                        <span className="border-t border-b w-8 text-center">
                          2
                        </span>
                        <button className="border text-gray-600 w-8 h-8 hover:text-red-500 hover:border-red-500 rounded-full">
                          +
                        </button>
                      </div>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        ${product.price}
                      </span>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        ${product.price}
                      </span>
                    </div>
                  )
                })
              }
              {/* <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Total
                </h3>
              </div> */}
              {/* <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                      alt=""
                    />
                  </div> */}
            </div>
            {/* <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Items 3</span>
                <span className="font-semibold text-sm">590$</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>$600</span>
                </div>
                <button className="bg-[#AACB73] font-semibold py-3 text-sm text-white uppercase w-full rounded-lg">
                  Checkout
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </body>
    </>
  );
};

export default CartProduct;
