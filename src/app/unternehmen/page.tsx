import { type Metadata } from "next";
import { type ReactNode } from "react";
import { UnternehmenTemplate } from "@/templates/unternehmen";

export const metadata: Metadata = {
  title: "Büro im Flow",
  description: "Büro im Flow",
};

const Unternehmen = (): ReactNode => {
  return <UnternehmenTemplate />;
};

export default Unternehmen;
