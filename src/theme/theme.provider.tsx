"use client";

import { FC, ReactNode, useState, useEffect } from "react";
import { ThemeContext } from "./useThemeContext";

import { setThemeCookie } from "./theme.action";
import { getActiveTheme } from "@/helpers/getActiveTheme";

interface ThemeProviderProps {
  children: ReactNode;
  cookieTheme: string;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, cookieTheme }) => {
  const [activeTheme, setActiveTheme] = useState<string>(
    getActiveTheme(cookieTheme),
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", activeTheme);
    setThemeCookie(activeTheme);
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
