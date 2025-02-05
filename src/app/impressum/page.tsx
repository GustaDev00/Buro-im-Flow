import { ImpressumTemplate } from "@/templates/impressum";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum",
};

const NutzlichRessourcen = (): ReactNode => {
  return <ImpressumTemplate />;
};

export default NutzlichRessourcen;
