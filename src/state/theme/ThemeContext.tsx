import { PropsWithChildren, createContext, useState } from "react";

// Make sure this match the colors specified in tailwind.config.js
export enum ThemeColors {
  RED = "red",
  TEAL = "teal",
  MAGENTA = "magenta",
}

interface IThemeContext {
  color: ThemeColors;
  setColor: (color: ThemeColors) => void;
}

const defaultValue: IThemeContext = {
  color: ThemeColors.RED,
  setColor: (color: ThemeColors) => undefined,
};

const ThemeContext = createContext<IThemeContext>(defaultValue);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [color, setColor] = useState(defaultValue.color);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
