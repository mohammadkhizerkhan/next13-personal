"use client";

import { useTheme } from "@/app/context/theme-context";
import React from "react";

const ThemButton = () => {
  const theme = useTheme();
  return (
    <button onClick={theme?.toggleDarkMode}>
      {theme?.isDarkMode ? "light" : "dark"}
    </button>
  );
};

export default ThemButton;
