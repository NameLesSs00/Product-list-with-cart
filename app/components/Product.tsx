import data from "@/app/Data/data.json";
import Item from "@/app/components/Item";
import Cart from "./Cart";
import { createContext } from "react";

const myContext = createContext();


const Product = () => {

  return (
    <>
      <div className="flex flex-col p-3 max-w-[375px] mx-auto ">
        <h1 className="text-4xl font-bold my-2 ">Desserts</h1>
        {data.map((item) => (
          <Item
            key={item.name}
            image={item.image.mobile}
            price={item.price}
            name={item.name}
            category={item.category}
          ></Item>
        ))}
        <Cart />
      </div>
    </>
  );
};

export default Product;
