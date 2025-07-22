import item from "@/assets/images/item1.webp";
import Image from "next/image";
const Card = () => {
  return (
    <div className="w-full ">
      <Image src={item} alt="card" />
      <div>
        <p className="mb-2 text-[#3d3d3d] leading-normal font-semibold mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
          doloremque!
        </p>
        <div className="flex gap-2">
          <p>$227.14</p>
          <p className="text-gray-400 line-through">$455.00</p>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="w-5 h-5 bg-red-500 border border-gray-400 rounded-[20%]"></div>
          <div className="w-5 h-5 bg-blue-500 border border-gray-400 rounded-[20%]"></div>
          <div className="w-5 h-5 bg-green-500 border border-gray-400 rounded-[20%]"></div>
          <div className="w-5 h-5 bg-yellow-500 border border-gray-400 rounded-[20%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
