"use client";
import Image from "next/image";
import { pingCoingecko, marketData, fetchCoinData } from "./api/coingecko";

export default function Home() {
  const test = () => {
    console.log(fetchCoinData());
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button className="bg-gray-500" onClick={test}>
          {" "}
          BUTOOOTTNN
        </button>
      </div>
    </main>
  );
}
