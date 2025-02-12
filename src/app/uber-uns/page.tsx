import { type Metadata } from "next";
import { type ReactNode } from "react";
import { UberUnsTemplate } from "@/templates/uber-uns";

export const metadata: Metadata = {
  title: "Büro im Flow",
  description: "Büro im Flow",
};

const UberUns = (): ReactNode => {
  return <UberUnsTemplate />;
};

export default UberUns;
