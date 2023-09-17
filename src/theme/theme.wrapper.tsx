import { FC, ReactNode } from "react";

import ThemeProvider from "./theme.provider";

import { cookies } from "next/headers";

interface ThemeWrapperProps {
  children: ReactNode;
}

export const ThemeWrapper: FC<ThemeWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider cookieTheme={cookies().get("theme")?.value || ""}>
      {children}
    </ThemeProvider>
  );
};
