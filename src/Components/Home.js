import React, { useContext, useState } from "react";
import { products } from "../Products";
import SingleProduct from "./SingleProduct";
import "./Home.css";
import { CartContext } from "../Context";

const Home = () => {

  const {cart,setCart}  =useContext(CartContext)

  return (
    <div className="home">
      {products.map((prod) => (
        <SingleProduct
          prod={prod}
          key={prod.id}
        />
      ))}
    </div>
  );
};

export default Home;
