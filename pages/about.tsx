import Image from "next/image";

import ChickenCoop from "../public/chicken-coop.jpeg";

export default function About() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-4">About Us</h1>
      <div className="flex flex-col gap-4 text-xl">
        <p>
          The moment that started it all !!! 1 year ago I harvested my first
          tomato out of my backyard. The feeling that came with this harvest was
          unequivocal to any emotion I had felt in years! It was in that moment
          I knew something was going to change. The pandemic a few years back
          set the stage. Grocery store shelves being emptied before I could get
          off work to by even a single vegetable. Not a good feeling👎In
          response to the crisis I planted a single tomato bush! ❤😂👍
        </p>
        <p>
          Seems like a small action BUT two months and one bite of a fresh
          picked juicy tomato later and I understood the assignment. To leave my
          corporate engineering job in pursuit of something more meaningful to
          me. Good, nutritious, pesticide and fertilizer free home grown food.{" "}
        </p>
        <p>
          Fast forward a little over a year later to the third photo. I moved
          with my Fiancé 1500 miles from San Diego, California to East Texas on
          a small homestead with a few acres to raise livestock and harvest all
          the fruits and veggies possible! Follow along to see how we take an
          old beat up cow pasture and turn it into our personal backyard grocery
          store! 🚜🌾🐔
        </p>
        <div className="aspect-w-16 aspect-h-9 relative w-full h-auto max-w-2xl m-auto mb-8">
          <Image
            src={ChickenCoop}
            alt="Picture of a mobile chicken coop on Dewindt Farms"
            style={{ objectFit: "cover", borderRadius: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
}
