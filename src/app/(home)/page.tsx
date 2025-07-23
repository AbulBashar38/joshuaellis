import item1 from "@/assets/images/item1.webp";
import item2 from "@/assets/images/item2.webp";
import item3 from "@/assets/images/item3.webp";
import item4 from "@/assets/images/item4.webp";
import item5 from "@/assets/images/item5.webp";
import item6 from "@/assets/images/item6.webp";
import item7 from "@/assets/images/item7.webp";
import item8 from "@/assets/images/item8.webp";
import Footer from "@/components/Footer/Footer";
import ItemCard from "@/components/ItemCard";
import Navbar from "@/components/Navbar/Navbar";
import TopInfoBar from "@/components/Navbar/TopInfoBar";
import { Item } from "@/types";
import HeroPart from "./features/HeroPart";
import ImageMasonry from "./features/ImageMasonry";
import OurStory from "./features/OurStory";

export default function Home() {
  const items: Item[] = [
    {
      id: 1,
      title:
        "Block Check Ripple Finish Extra Wide Cashmere Scarf Multi-Coloured",
      price: "$227.50",
      discountPrice: "$455.00",
      colors: ["#8B4513", "#2F4F4F", "#800080"],
      img: item1,
      tag: "Best Seller",
      offer: "-50% sale",
    },
    {
      id: 2,
      title: "Primary Black Watch Cashmere Stole Amber",
      price: "$190.75",
      discountPrice: "$545.00",
      colors: ["#000000", "#FFB000", "#2F4F4F"],
      img: item2,
      tag: "Iconic Black Watch",
      offer: "-65% sale",
    },

    {
      id: 4,
      title: "A Light Touch 100% Escorial Wool Stole - Coral",
      price: "$105.00",
      discountPrice: "$175.00",
      colors: ["#FF7F50", "#F0F8FF", "#FFF8DC"],
      img: item3,
      offer: "-40% sale",
    },
    {
      id: 5,
      title: "Classic Plain Wide Ripple Cashmere Scarf Lobster Pink",
      price: "$209.40",
      discountPrice: "$349.00",
      colors: ["#FF69B4", "#F08080", "#FFB6C1"],
      img: item4,
      tag: "The Classic Collection",
      offer: "-60% sale",
    },
  ];
  const items2: Item[] = [
    {
      id: 1,
      title:
        "Block Check Ripple Finish Extra Wide Cashmere Scarf Multi-Coloured",
      price: "$227.50",
      discountPrice: "$455.00",
      colors: ["#8B4513", "#2F4F4F", "#800080"],
      img: item5,
      tag: "Best Seller",
      offer: "-50% sale",
    },
    {
      id: 2,
      title: "Primary Black Watch Cashmere Stole Amber",
      price: "$190.75",
      discountPrice: "$545.00",
      colors: ["#000000", "#FFB000", "#2F4F4F"],
      img: item6,
      tag: "Iconic Black Watch",
      offer: "-65% sale",
    },

    {
      id: 4,
      title: "A Light Touch 100% Escorial Wool Stole - Coral",
      price: "$105.00",
      discountPrice: "$175.00",
      colors: ["#FF7F50", "#F0F8FF", "#FFF8DC"],
      img: item7,
      offer: "-40% sale",
    },
    {
      id: 5,
      title: "Classic Plain Wide Ripple Cashmere Scarf Lobster Pink",
      price: "$209.40",
      discountPrice: "$349.00",
      colors: ["#FF69B4", "#F08080", "#FFB6C1"],
      img: item8,
      tag: "The Classic Collection",
      offer: "-60% sale",
    },
  ];
  return (
    <main className="">
      <TopInfoBar />
      <Navbar />
      <HeroPart />
      <section className="grid grid-cols-4 mt-20 px-2 gap-2 mb-20">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
      <div className="flex items-center justify-center w-full ">
        <button className="border py-2 px-9">SHOW MORE</button>
      </div>
      <ImageMasonry />
      <section className="grid grid-cols-4 mt-20 px-2 gap-2 mb-20">
        {items2.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
      <div className="flex items-center justify-center w-full ">
        <button className="border py-2 px-9">SHOW MORE</button>
      </div>
      <OurStory />
      <Footer />
    </main>
  );
}
