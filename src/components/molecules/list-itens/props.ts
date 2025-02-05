import { ReactNode } from "react";

export interface ListItensProps {
  items: {
    title: ReactNode;
    description: ReactNode;
    icon: ReactNode;
  }[];
}
