import logo from "@/assets/logos/logo.avif";
import { Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="py-5 px-[3%]">
      <div className="w-full flex items-center justify-center ">
        <Image
          className="w-[225px]"
          src={logo}
          weight={500}
          height={500}
          alt="logo"
        ></Image>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="max-w-[1200px] w-full flex items-center justify-between font-tenor ">
          <button className="flex gap-1 text-[#758285] text-[14px]">
            Discover
            <Menu />
          </button>
          <div className="flex gap-4 text-black !text-[8px]">
            <Search size={19} />
            <UserRound size={19} />
            <ShoppingBag size={19} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
