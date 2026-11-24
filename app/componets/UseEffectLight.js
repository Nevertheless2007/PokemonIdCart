"use client";
import { use, useEffect, useState } from "react";

export const UseEffectLight = () => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    const currentValue = localStorage.getItem("isOn");
    setIsOn(currentValue === "true" ? true : false);
  }, []);
  const toggleTheme = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    localStorage.setItem("isOn", newValue);
  };
  return (
    <div
      className={`text-white h-[1100px] w-[1800px] ${isOn ? "bg-black" : "bg-white"} flex flex-col justify-center text-center  gap-13 `}
    >
      <div className="text-[70px]">{`${isOn ? "🌑" : "☀️"}`}</div>
      <div>
        {" "}
        <button
          className={`h-[50px] rounded-2xl text-[20px] font-bold  w-[230px] ${isOn ? "bg-white" : "bg-black"}  ${isOn ? "text-black" : "white"}`}
          onClick={() => {
            setIsOn(!isOn);
          }}
        >
          Gerelte bolgoh
        </button>
      </div>
    </div>
  );
};
