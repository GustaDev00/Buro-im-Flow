import { type Metadata } from "next";
import { type ReactNode } from "react";
import { KontaktTemplate } from "@/templates/kontakt";

export const metadata: Metadata = {
  title: "Büro im Flow",
  description: "Büro im Flow",
};

const Kontakt = (): ReactNode => {
  return <KontaktTemplate />;
};

export default Kontakt;
