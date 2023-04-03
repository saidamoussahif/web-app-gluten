import React, { useEffect, useState } from "react";
import Header from "../components/Headers/Header";
import axios from "axios";
function FilterProduct() {
  //get category from url
  const category = window.location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);
  console.log(category);

  useEffect(() => {
    //fetch product by category
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
     <div>
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
    </div>
    </>
  );
}

export default FilterProduct;
