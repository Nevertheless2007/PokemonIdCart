"use client";
import { useState } from "react";
import { Counter } from "./componets/Counter";
import { items } from "./componets/data";
import { LightSwitch } from "./componets/LightSwitch";
import { SecretMessage } from "./componets/SecretMessage";

export default function Home() {
  return (
    <div className="flex justify-center item-center text-4xl gap-30 bg-[#f2f4fa] h-[1000px]">
      <Counter />
      <LightSwitch />
      <SecretMessage />
    </div>
  );
}
