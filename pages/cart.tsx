import Link from "next/link";

export default function Cart() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p className="text-xl">Your cart is currently empty.</p>
      <Link
        className="bg-red-500 text-white py-4 px-12 block hover:bg-red-600 rounded-md"
        href="/"
      >
        Back to shop
      </Link>
    </div>
  );
}
