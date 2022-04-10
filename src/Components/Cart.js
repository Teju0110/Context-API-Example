import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import './Cart.css'
import { CartContext } from "../Context";

const Cart = () => {

  const {cart,setCart}  =useContext(CartContext)

  const[total,setTotal]=useState(0)
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+curr.price,0));
    
  },[])

  console.log(total);

  return (
    <div className="cart">
      <span>My Cart</span>
      <br />
      <span>Total: Rs {total}</span>
      <div className="  ">
        {cart.map((prod) => (
          <SingleProduct
            prod={prod}
            key={prod.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
