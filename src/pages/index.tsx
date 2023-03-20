import { useContext } from "react";
import ThemeContext, {
  NextFonts,
  ThemeColors,
  ThemeFonts,
} from "@/state/theme/ThemeContext";

export default function Home() {
  const { color, setColor, font, setFont } = useContext(ThemeContext);

  return (
    <>
      <div className="block">Color: {color}</div>
      <div className="block">Font: {font}</div>
      <button
        className="block cursor-pointer"
        onClick={() => setColor(ThemeColors.RED)}>
        RED
      </button>
      <button
        className="block cursor-pointer"
        onClick={() => setColor(ThemeColors.TEAL)}>
        TEAL
      </button>
      <button
        className="block cursor-pointer"
        onClick={() => setColor(ThemeColors.MAGENTA)}>
        MAGENTA
      </button>

      <button
        className="block cursor-pointer"
        onClick={() => setFont(NextFonts[ThemeFonts.SANS])}>
        Sans
      </button>
      <button
        className="block cursor-pointer"
        onClick={() => setFont(NextFonts[ThemeFonts.SERIF])}>
        Serif
      </button>
      <button
        className="block cursor-pointer"
        onClick={() => setFont(NextFonts[ThemeFonts.MONO])}>
        Mono
      </button>
      <div className={font}>HELLO PHO</div>
    </>
  );
}
