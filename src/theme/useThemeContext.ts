"use client";

import { createContext, useContext } from "react";

import { IThemeContext } from "./theme.interface";

export const ThemeContext = createContext<IThemeContext>({
  activeTheme: "",
  setActiveTheme: () => {},
});

export const useThemeContext = () => useContext<IThemeContext>(ThemeContext);
