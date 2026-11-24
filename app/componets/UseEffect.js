"use client";
import { use, useEffect, useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    if (count > 0) {
      document.title = `nemgdeed ${count} bga bizde`;
    }
  });
  return (
    <div>
      <div className="flex flex-col text-center text-black pt-40 gap-10 ">
        <h1 className="font-extrabold  font-extrabold  text-4xl">
          Табын нэрээ хар 👆🏻
        </h1>
        <h1 className="font-extrabold  text-4xl">{count}</h1>
        <div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="h-[50px] w-[100px] text-2xl  font-extrabold  shadow-2xl rounded-[10px] text-white bg-black"
          >
            Дар
          </button>
        </div>
      </div>
    </div>
  );
};
