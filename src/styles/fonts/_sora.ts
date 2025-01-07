import { Sora } from "next/font/google";

export const sora = Sora({
  weight: ["200", "300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--sora",
});
