import { type Metadata } from "next";
import { type ReactNode } from "react";
import { PrivatkundenTemplate } from "@/templates/privatkunden";

export const metadata: Metadata = {
  title: "Fiber web - Creative Webseiten",
  description: "Creative Webseiten Effektives Marketing Smarte KI Lösungen",
};

const Privatkunden = (): ReactNode => {
  return <PrivatkundenTemplate />;
};

export default Privatkunden;
