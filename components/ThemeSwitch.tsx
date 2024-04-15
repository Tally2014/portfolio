"use client";
import { useTheme } from "@/context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="w-[2rem] h-[2rem] border-2 borderBlack shadow-2xl rounded-full dark:border-gray-400 dark:text-gray-400
      flex items-center justify-center text-gray-700 hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
