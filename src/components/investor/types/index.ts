export interface RaiseCardData {
  id: string;
  number: string;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
}

export interface SectionHeaderData {
  subtitle: string;
  title: string;
  description: string;
}