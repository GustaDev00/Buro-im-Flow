import { DatenschutzTemplate } from "@/templates/datenschutz";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutz",
};

const NutzlichRessourcen = (): ReactNode => {
  return <DatenschutzTemplate />;
};

export default NutzlichRessourcen;
