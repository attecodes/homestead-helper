import React from "react";

import Image from "next/image";

import toast from "react-hot-toast";
import CheckCircleIcon from "@heroicons/react/20/solid/CheckCircleIcon";

import { useRecoilState } from "recoil";
import { cartState } from "atoms/cartState";

import { Product } from "types";

interface ProductProps {
  product: Product;
}

const Product = ({ product }: ProductProps) => {
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const handleAddProductToCart = () => {
    if (cartItem.findIndex((prod: Product) => prod.id === product.id) === -1) {
      setCartItem((prevState) => [...prevState, product]);
    } else {
      setCartItem((prevState) => {
        return prevState.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
    }
    toast.custom(
      <div className="text-white bg-red-500 p-2 rounded-md text-xl relative bg-opacity-90">
        <CheckCircleIcon className="text-green-400 h-8 w-8 inline" />
        <span className="font-bold"> {product.name}</span> added to cart
        <button
          className="absolute -top-2 -right-2 text-[13px] bg-red-500 h-[24px] w-[24px] rounded-md grid place-items-center text-white"
          onClick={() => toast.remove()}
        >
          <span>X</span>
        </button>
      </div>,
      { duration: 1500 }
    );
  };
  return (
    <div className="my-4 flex flex-col gap-1 items-center">
      <Image
        src={product.image}
        alt={product.name}
        width={320}
        height={320}
        className="rounded-md"
      />

      <h1 className="text-2xl">{product.name}</h1>
      <h3 className="text-xl">${product.price}</h3>
      <button
        className="bg-red-500 text-white py-4 px-12 block hover:bg-red-600 rounded-md"
        onClick={handleAddProductToCart}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
