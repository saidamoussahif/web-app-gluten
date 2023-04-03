import React from "react";
import Categories from "./Categories";
import Slider from "./Slider";
import "./Home.css";
import ServiceCard from "./ServiceCard";
import CategoryCard from "./CategoryCard";

function Home() {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <Slider />
        </div>
        <ServiceCard />
        <CategoryCard />
      </section>
    </>
  );
}

export default Home;
