import { useContext, useState } from "react";
import { KumbhSans, RobotoSlab, SpaceMono } from "./_app";
import ThemeContext, { ThemeColors } from "@/state/theme/ThemeContext";

export default function Home() {
  const { color, setColor } = useContext(ThemeContext);
  const [selectedFont, setSelectedFont] = useState("");

  return (
    <>
      {color}
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
        onClick={() => setSelectedFont(`${KumbhSans.variable} font-sans`)}>
        Sans
      </button>
      <button
        onClick={() => setSelectedFont(`${RobotoSlab.variable} font-serif`)}>
        Serif
      </button>
      <button
        onClick={() => setSelectedFont(`${SpaceMono.variable} font-mono`)}>
        Mono
      </button>
      <div className={selectedFont}>HELLO PHO</div>
    </>
  );
}
