import { FC, ReactNode } from "react";

import { ThemeWrapper } from "@/theme/theme.wrapper";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ThemeWrapper>{children}</ThemeWrapper>;
};

export default Providers;
