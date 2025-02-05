import { type Metadata } from "next";
import { type ReactNode } from "react";
import { KontaktTemplate } from "@/templates/kontakt";

export const metadata: Metadata = {
  title: "Fiber web - Creative Webseiten",
  description: "Creative Webseiten Effektives Marketing Smarte KI Lösungen",
};

const Kontakt = (): ReactNode => {
  return <KontaktTemplate />;
};

export default Kontakt;
