"use client";
import { useState } from "react";

export const LightSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      className={`text-white h-[300px] w-[350px] ${isOn ? "bg-[#1c293e]" : "bg-[#fef9c2]"} flex flex-col justify-center text-center rounded-3xl gap-13 `}
    >
      <div className={`${isOn ? "text-white" : "text-black"}`}>💡Гэрэл</div>

      <div className="text-[70px]">{`${isOn ? "🌑" : "💡"}`}</div>
      <div>
        {" "}
        <button
          className="h-[50px] rounded-2xl text-[20px] font-bold text-black w-[130px] bg-yellow-500 "
          onClick={() => {
            setIsOn(!isOn);
          }}
        >
          Асаах
        </button>
      </div>
    </div>
  );
};
