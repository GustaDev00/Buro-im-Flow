export interface AccountingProps {
  img: {
    src: string;
    alt: string;
  };
  list: {
    title: string;
    content: React.ReactNode;
  }[];
}
