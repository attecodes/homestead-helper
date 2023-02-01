import { atom, selector } from "recoil";
import { Product } from "types";

export const cartState = atom({
  key: "cartState",
  default: [] as Product[],
});

export const cartStateStats = selector({
  key: "cartStateStats",
  get: ({ get }) => {
    const products = get(cartState);
    let cartTotalQuantity = products.reduce(
      (acc, cur) => acc + cur.quantity,
      0
    );
    let cartTotalPrice = products.reduce(
      (acc, cur) => acc + cur.quantity * cur.price,
      0
    );
    return { cartTotalQuantity, cartTotalPrice };
  },
});
