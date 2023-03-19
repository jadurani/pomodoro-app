import { useState } from "react";

import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";

const KumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-kumbh-sans",
});
const RobotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto-slab",
});
const SpaceMono = Space_Mono({
  weight: ["700"],
  variable: "--font-space-mono",
  preload: false,
});

export default function Home() {
  const [selectedFont, setSelectedFont] = useState("");

  return (
    <>
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
