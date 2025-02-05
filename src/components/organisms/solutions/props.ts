import { ReactNode } from "react";

export interface SolutionsProps {
  title: ReactNode;
  card: {
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
  }[];
}
