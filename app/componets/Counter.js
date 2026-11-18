"use client";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className=" flex flex-col  text-4xl gap-10 text-black ">
      <div>🔢Тоолуур</div>

      <div className="flex justidy-center item-center text-[100px] pl-16">
        {count}
      </div>

      <div className="flex gap-20">
        <button
          className="bg-black h-[50px] w-[50px] rounded-4xl flex justify-center item-center text-white"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>

        <button
          className="bg-black h-[50px] w-[50px] rounded-4xl flex justify-center item-center text-white"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};
