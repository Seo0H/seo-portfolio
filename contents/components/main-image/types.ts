export type MainImageItemContents = {
  caption?: Caption;
  src: string;
  className?: string;
  isPrint?: boolean;
};

export interface ImageGalleryProps {
  contents: MainImageItemContents[];
  uniqId: string;
}

export type Caption = { heading: string; descriptions?: string };
