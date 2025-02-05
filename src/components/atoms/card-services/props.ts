import { ReactNode } from "react";

export interface CardServicesProps {
  subtitle: ReactNode;
  bg: {
    src: string;
    alt: string;
  };
  text: ReactNode;
  link: {
    href: string;
    title: string;
  };
}
