import React, { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";

import { useRecoilValue } from "recoil";
import { cartStateStats } from "atoms/cartState";

import Logo from "components/Logo";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { cartTotalQuantity } = useRecoilValue(cartStateStats);
  const router = useRouter();
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between py-4 bg-red-500 mb-3 px-4 lg:px-0">
        <div className="container  mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" onClick={() => setNavbarOpen(false)}>
              <Logo />
            </Link>
            <div className="flex">
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden "
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <Bars3Icon className="h-8 w-8 text-white" />
              </button>
              <Link
                className={
                  "px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75 lg:hidden" +
                  (router.pathname == "/cart" ? " text-neutral-800" : "")
                }
                href="/cart"
                onClick={() => setNavbarOpen(false)}
              >
                <div className="relative">
                  <ShoppingCartIcon className="ml-2  h-8 w-8" />
                  <span className="absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white">
                    {cartTotalQuantity}
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center mt-2" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center lg:w-min w-full ">
              <li
                className={
                  "nav-item w-full justify-center lg:w-fit flex text-sm uppercase font-bold leading-snug text-white hover:opacity-75" +
                  (router.pathname == "/" ? " text-neutral-800" : "")
                }
                onClick={() => setNavbarOpen(false)}
              >
                <Link
                  href="/"
                  className="w-full justify-center flex py-4 lg:py-0"
                >
                  Shop
                </Link>
              </li>
              <li
                className={
                  "nav-item w-full justify-center lg:w-fit flex text-sm uppercase font-bold leading-snug text-white hover:opacity-75 lg:ml-6" +
                  (router.pathname == "/about" ? " text-neutral-800" : "")
                }
                onClick={() => setNavbarOpen(false)}
              >
                <Link
                  className="w-full justify-center flex py-4 lg:py-0"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className={"nav-item"} onClick={() => setNavbarOpen(false)}>
                <Link
                  className={
                    "px-3 py-2 items-center uppercase font-bold leading-snug text-white hover:opacity-75 hidden lg:flex" +
                    (router.pathname == "/cart" ? " text-neutral-800" : "")
                  }
                  href="/cart"
                >
                  <div className="relative">
                    <ShoppingCartIcon className="ml-2  h-8 w-8" />
                    <span className="absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white">
                      {cartTotalQuantity}
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
