export interface TechnologyProps {
  title: React.ReactNode;
  description: React.ReactNode;
  link?: {
    href: string;
    title: string;
  };
  imgs: {
    alt: string;
    src: string;
  }[];
}
