import React from "react";
import { BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  return (
    <button className="w-[2rem] h-[2rem] border-2 borderBlack shadow-2xl rounded-full flex items-center justify-center text-gray-700 hover:scale-[1.15] active:scale-105 transition-all">
      <BsSun />
    </button>
  );
}
