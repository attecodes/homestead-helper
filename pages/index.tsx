import React from "react";

import Product from "components/Product";
import data from "../data.json";

// import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
//   loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
// } else {
//   throw new Error("Stripe failed to load");
// }

export default function Home() {
  // React.useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search);
  //   if (query.get("success")) {
  //     console.log("Order placed! You will receive an email confirmation.");
  //   }

  //   if (query.get("canceled")) {
  //     console.log(
  //       "Order canceled -- continue to shop around and checkout when you’re ready."
  //     );
  //   }
  // }, []);

  return (
    // <div className="">
    //   <form action="/api/checkout_sessions" method="POST">
    //     <section>
    //       <button type="submit" role="link" className="button">
    //         Checkout
    //       </button>
    //     </section>
    //   </form>
    // </div>
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
