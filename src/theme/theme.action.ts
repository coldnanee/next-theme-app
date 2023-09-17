"use server";

import { cookies } from "next/headers";

export const setThemeCookie = async (theme: string) => {
  cookies().set("theme", theme);
};
