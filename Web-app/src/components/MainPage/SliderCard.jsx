import React from "react";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SliderCard() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) =>{
    return <ul style={{margin: "0px"}}>{dots}</ul>
    }
  };
  const [product, setProduct] = useState([]);
  const getProducts = async () => {
    const response = await fetch(
      "http://localhost:9090/api/products/getAll"
      // "http://172.19.32.1:9090/api/products/getAll"
    );
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProducts();
  });
  return (
    <>
      <Slider {...settings}>
        {product.map((value, index) => {
          return (
            <div className="box d_flex top" key={index}>
              <div className="left">
                <h1>{value.productName}</h1>
                <p>{value.description}</p>
                <h2>{value.price}</h2>
                <h2>{value.quantity}</h2>
                <a href="/cart">
                  <button className="btn-primary">
                  Add to card
                </button>
                </a>
              </div>
              <div className="right">
                <img 
                src={`http://localhost:9090/img/${value.image}`}
                alt="productImage" />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default SliderCard;
