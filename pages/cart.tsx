import { FormEvent } from "react";
import Link from "next/link";

import { useRecoilState, useRecoilValue } from "recoil";

import { cartState, cartStateStats } from "atoms/cartState";
import CartProductsList from "components/CartProductsList";
import getStripe from "utils/getStipe";

export default function Cart() {
  const [cartProducts] = useRecoilState(cartState);
  const { cartTotalQuantity, cartTotalPrice } = useRecoilValue(cartStateStats);

  const handleCheckout = async (e: FormEvent) => {
    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      body: JSON.stringify(cartProducts),
    });
    const { sessionId } = await response.json();
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId,
    });
    if (error) {
      console.warn(error.message);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-semibold text-center my-4">Cart</h1>
      {cartTotalQuantity ? (
        <div className="flex flex-col justify-center items-center gap-10">
          <CartProductsList products={cartProducts} />
          <div className="flex justify-center items-center gap-2 ">
            <div className="text-2xl">
              Total Price:<span className="font-bold">${cartTotalPrice}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="bg-red-500 text-white py-4 px-12 block hover:bg-red-600 rounded-md "
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-xl">Your cart is currently empty.</p>
          <Link
            className="bg-red-500 text-white py-4 px-12 block hover:bg-red-600 rounded-md"
            href="/"
          >
            Back to shop
          </Link>
        </div>
      )}
    </>
  );
}
