import React from "react";

import Product from "components/Product";
import data from "../data.json";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mt-4">Our Products</h1>
      <div className="grid justify-center mt-4">
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
