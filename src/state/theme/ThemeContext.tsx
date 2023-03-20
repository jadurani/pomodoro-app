import { KumbhSans, RobotoSlab, SpaceMono } from "@/pages/_app";
import { PropsWithChildren, createContext, useState } from "react";

// Make sure this match the colors specified in tailwind.config.js
export enum ThemeColors {
  RED = "red",
  TEAL = "teal",
  MAGENTA = "magenta",
}

// Make sure this match the colors specified in tailwind.config.js
export enum ThemeFonts {
  SANS = "font-sans",
  SERIF = "font-serif",
  MONO = "font-mono",
}

export const NextFonts: Record<ThemeFonts, ThemeFont> = {
  [ThemeFonts.SANS]: `${KumbhSans.variable} ${ThemeFonts.SANS}`,
  [ThemeFonts.SERIF]: `${RobotoSlab.variable} ${ThemeFonts.SERIF}`,
  [ThemeFonts.MONO]: `${SpaceMono.variable} ${ThemeFonts.MONO}`,
};

type ThemeFont = `${string} ${ThemeFonts}`;

interface IThemeContext {
  color: ThemeColors;
  setColor: (color: ThemeColors) => void;

  font: ThemeFont;
  setFont: (themeFont: ThemeFont) => void;
}

const defaultValue: IThemeContext = {
  color: ThemeColors.RED,
  setColor: (color: ThemeColors) => undefined,

  font: NextFonts[ThemeFonts.SANS],
  setFont: (themeFont: ThemeFont) => undefined,
};

const ThemeContext = createContext<IThemeContext>(defaultValue);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [color, setColor] = useState(defaultValue.color);
  const [font, setFont] = useState(defaultValue.font);

  return (
    <ThemeContext.Provider value={{ color, setColor, font, setFont }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
