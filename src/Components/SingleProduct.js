import React, { useContext } from "react";
import { CartContext } from "../Context";
import "./SingleProduct.css";

const SingleProduct = ({ prod}) => {
  const {cart,setCart}  =useContext(CartContext)
  return (
    <div className="singleProduct">
      <img src={prod.img} alt="" className="singleProduct_image" />
      <div className="singleProduct_desc">
        <span className="singleProduct_name">{prod.name}</span>
        <span>Rs. {prod.price}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="singleProduct_button"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          className="singleProduct_button"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
