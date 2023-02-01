import React, { FC } from "react";
import Image from "next/image";

import { Product } from "types";

interface CartProductsListProps {
  products: Product[];
}

const CartProductsList: FC<CartProductsListProps> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ListItem product={product} key={product.id} />
      ))}
    </>
  );
};

interface ListItemProps {
  product: Product;
}

const ListItem: FC<ListItemProps> = ({
  product: { name, quantity, price, image },
}) => {
  return (
    <div>
      <div className="max-w-[800px] mx-auto mt-4 flex gap-6 items-center justify-between">
        <Image
          src={image}
          alt={name}
          width={96}
          height={96}
          className="rounded-lg"
        />

        <div>
          <div className="font-bold text-2xl">{name}</div>
          <div>Qty: {quantity}</div>
        </div>

        <div className="text-3xl font-bold">${price * quantity}</div>
      </div>
    </div>
  );
};

export default CartProductsList;
