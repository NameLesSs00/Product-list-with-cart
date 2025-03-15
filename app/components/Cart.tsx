"use client";
import { useState } from "react";

const emptyCartImg = "./assets/images/illustration-empty-cart.svg";
const Cart = () => {
  const [numOfItems, setnumOfItems] = useState(0);
  return (
    <div className="bg-white max-w-[350px] rounded-lg flex flex-col ">
      <h1 className="text-2xl font-bold ml-5 my-5 text-[#cd3c0f]">
        Your Cart ({numOfItems})
      </h1>
      <div className="flex flex-col items-center justify-center flex-1 gap-2">
        <img src={emptyCartImg} alt="empty cart image" className="w-32 h-32 mt-3" />
        <p className="text-[#A0522D] mb-10">Your added items will appear here</p>
      </div>
    </div>
  );
};

export default Cart;
