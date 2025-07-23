import { Item } from "@/types";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
interface IProps {
  item: Item;
}
const ItemCard = ({ item }: IProps) => {
  console.log(item);

  return (
    <Card className="w-full py-0 rounded-none border-none shadow-none">
      <div className="max-h-[430px] relative">
        <Image
          src={item.img}
          alt="card"
          className="w-full h-full object-cover"
        />
        {item?.tag && (
          <Badge className="absolute -top-2.5 left-2.5 " variant="secondary">
            {item.tag}
          </Badge>
        )}
        <div className="absolute right-2 top-2 bg-black text-white uppercase px-2 py-1 font-bold text-[12px]">
          <span> {item.offer}</span>
        </div>
      </div>
      <div>
        <div className="min-h-10">
          <p className="mb-2 text-[#3d3d3d] leading-[normal] font-semibold mt-2">
            {item.title}
          </p>
        </div>
        <div className="flex gap-2">
          <p>{item.price}</p>
          <p className="text-gray-400 line-through">{item.discountPrice}</p>
        </div>
        <div className="flex gap-2 mt-2">
          {item.colors.map((color) => (
            <div
              key={color}
              className={"w-5 h-5 border border-gray-400 rounded-[20%]"}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ItemCard;
