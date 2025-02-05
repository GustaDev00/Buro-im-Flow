import { type Metadata } from "next";
import { type ReactNode } from "react";
import { UnternehmenTemplate } from "@/templates/unternehmen";

export const metadata: Metadata = {
  title: "Fiber web - Creative Webseiten",
  description: "Creative Webseiten Effektives Marketing Smarte KI Lösungen",
};

const Unternehmen = (): ReactNode => {
  return <UnternehmenTemplate />;
};

export default Unternehmen;
