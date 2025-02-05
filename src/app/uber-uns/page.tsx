import { type Metadata } from "next";
import { type ReactNode } from "react";
import { UberUnsTemplate } from "@/templates/uber-uns";

export const metadata: Metadata = {
  title: "Fiber web - Creative Webseiten",
  description: "Creative Webseiten Effektives Marketing Smarte KI Lösungen",
};

const UberUns = (): ReactNode => {
  return <UberUnsTemplate />;
};

export default UberUns;
