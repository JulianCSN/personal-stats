"use client";

import React from "react";
import { IoTrophySharp } from "react-icons/io5";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  return (
    <div>
      <div className="flex justify-center items-center">
        <header className="text-left mt-16 select-none">
          <h1 className="lg:text-6xl text-lg text-yellow-400">Welcome to</h1>
          <div className="flex">
            <h1 className="lg:text-9xl text-5xl text-red-500 -mt-2">My Personal Stats</h1>
            <IoTrophySharp className="lg:text-7xl text-3xl text-yellow-400 ml-4 lg:mt-6 mt-0"/>
          </div>
          <h1 className="lg:text-3xl text-md text-end text-gray-300 lg:-mt-4 -mt-2">JOSE JULIAN RODRIGUEZ CISNEROS</h1>
        </header>
      </div>

      <main className="flex flex-col gap-6 items-center lg:mt-20 mt-10 lg:text-3xl text-lg ">
        <button onClick={() => router.push('/concerts')} className="text-slate-700 lg:w-3/12 w-8/12 py-2 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105 bg-gray-200 hover:bg-red-500 hover:text-white rounded-lg select-none">
          Concerts
        </button>
      </main>
    </div>
  );
}
