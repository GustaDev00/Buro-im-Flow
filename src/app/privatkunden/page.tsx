import { type Metadata } from "next";
import { type ReactNode } from "react";
import { PrivatkundenTemplate } from "@/templates/privatkunden";

export const metadata: Metadata = {
  title: "Büro im Flow",
  description: "Büro im Flow",
};

const Privatkunden = (): ReactNode => {
  return <PrivatkundenTemplate />;
};

export default Privatkunden;
