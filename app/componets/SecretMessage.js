"use client";
import { useState } from "react";

export const SecretMessage = () => {
  const [isLocked, setIsLocked] = useState(true);
  return (
    <div
      className={`text-white h-[300px] w-[350px] bg-white flex flex-col justify-center text-center rounded-3xl gap-13 `}
    >
      <div className={`text-black`}> Нууц мессеж</div>
      <div className="text-[70px]">{`${isLocked ? " 🔓" : "🔒"}`}</div>

      <div>
        <button
          className="h-[50px] rounded-2xl text-[20px] font-bold text-white t w-[130px] bg-[#9810f8]"
          onClick={() => {
            setIsLocked(!isLocked);
          }}
        >
          Харах
        </button>
      </div>
      {isLocked && (
        <p className="text-black bg-pink-500 text-[30px]">
          {" "}
          🥳 Чи useState-ийг ойлголоо!
        </p>
      )}
    </div>
  );
};
