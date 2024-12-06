import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const mabryPro = localFont({
  src: [
    {
      path: "./fonts/MabryPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MabryPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/MabryPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },

    {
      path: "./fonts/MabryPro-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mabry-pro",
});
