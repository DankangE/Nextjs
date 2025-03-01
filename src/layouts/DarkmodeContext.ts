import { createContext } from "react";

export const DarkmodeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});
