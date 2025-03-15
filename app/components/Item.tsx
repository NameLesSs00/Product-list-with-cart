"use client";

const addToCartIcon = "./assets/images/icon-add-to-cart.svg";
const incrementIcon = "./assets/images/icon-increment-quantity.svg";
const decrementIcon = "../assets/images/icon-decrement-quantity.svg";

import { useState } from "react";

interface ItemProps {
  image: string;
  name: string;
  category: string;
  price: number;
}

const Item = ({ image, name, category, price }: ItemProps) => {
  const [itemCount, setItemCount] = useState(0);
  let buttonDisplay;
  function handleIncrementBtn() {
    setItemCount(itemCount + 1);
  }
  function handleDecrementBtn() {
    setItemCount(itemCount - 1);
  }
  if (itemCount <= 0) {
    buttonDisplay = (
      <div className="w-[50%] h-[2.5rem] bg-white rounded-full flex items-center justify-center gap-2 shadow-lg mt-[-20px] hover:border-[#cd3c0f] hover:border-2 relative ">
        <img src={addToCartIcon} alt="A Cart icon" className="w-5 h-5" />
        <button onClick={handleIncrementBtn} className="absolute inset-0" />
        <span>Add to Cart</span>
      </div>
    );
  } else {
    buttonDisplay = (
      <div className="w-[45%] h-[2.5rem] rounded-l-full rounded-r-full flex items-center justify-between px-3 shadow-lg mt-[-20px] bg-[#cd3c0f] ">
        <button onClick={handleDecrementBtn}>
          <img
            src={decrementIcon}
            alt="decrement icon"
            className="h-5 w-5 p-1 rounded-full border border-white "
          />
        </button>
        {itemCount}
        <button onClick={handleIncrementBtn}>
          <img
            src={incrementIcon}
            alt="increment icon"
            className="h-5 w-5 p-1 rounded-full border border-white"
          />
        </button>
      </div>
    );
  }
  return (
    <div className="">
      <section className="flex flex-col items-center relative ">
        <div className="border-2 border-transparent hover:border-[#cd3c0f] inline-block rounded-lg">
          <img src={image} alt={name} className="block w-full rounded-lg" />
        </div>

        {buttonDisplay}
      </section>

      <section className="mb-3">
        <p className=" text-gray-400">{category}</p>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-lg text-[#cd3c0f]">${price}</p>
      </section>
    </div>
  );
};

export default Item;
