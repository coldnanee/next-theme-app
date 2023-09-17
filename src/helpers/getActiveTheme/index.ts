export const getActiveTheme = (cookieTheme: string) => {
  if (["light", "dark"].includes(cookieTheme)) return cookieTheme;
  return "dark";
};
