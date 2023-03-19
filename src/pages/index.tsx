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
  return (
    <>
      <div className={`${SpaceMono.variable} font-mono`}>asfsf</div>
    </>
  );
}
