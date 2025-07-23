import { StaticImageData } from "next/image";

export interface Item {
  id: number;
  title: string;
  price: string;
  discountPrice: string;
  colors: string[];
  img: string | StaticImageData;
  tag?: string;
  offer: string;
}
