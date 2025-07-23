import logo from "@/assets/logos/logo.avif";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const items = [
    {
      title: "Customer Service",
      child: [
        {
          name: "Contact Us",
        },
        {
          name: "Returns Process",
        },
        {
          name: "Joshua's Journal",
        },
      ],
    },
    {
      title: "Connect",
    },
    {
      title: "Collections",
      child: [
        {
          name: "Scarves",
        },
        {
          name: "Stoles",
        },
        {
          name: "Accessories",
        },
      ],
    },
  ];
  return (
    <footer className="mt-10">
      <div className="w-full flex items-center justify-center ">
        <Image
          className="w-[225px]"
          src={logo}
          width={500}
          height={500}
          alt="logo"
        ></Image>
      </div>
      <div className="my-10 font-tenor flex items-start justify-center gap-20 text-[#758285]">
        {items.map((item) => (
          <div key={item.title}>
            <h1 className="text-lg uppercase mb-4 text-center">{item.title}</h1>
            {item?.child ? (
              <div className="flex flex-col justify-center gap-2 items-center text-base font-semibold">
                {item?.child?.map((childItem) => (
                  <Link key={childItem?.name} href={"#"}>
                    {childItem.name}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex gap-4">
                <Facebook size={19} />
                <Instagram size={19} />
                <Twitter size={19} />
                <Linkedin size={19} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="font-tenor flex items-center justify-center mb-8">
        <div className="flex w-1/2 gap-4 items-center">
          <p className="w-1/2 text-center">
            Join the community &amp; be the first to hear about our exclusive
            offers.
          </p>
          <div className="w-full flex items-start">
            <input type="text" className="outline w-full h-9 px-4" />
            <button className="h-9 px-2.5 bg-[#22333b] text-[#baa570] whitespace-nowrap ">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="px-11 py-4  border-t grid grid-cols-3 text-center">
        <p className="text-start">
          Copyright © 2025 Joshua Ellis. All rights reserved | Site Designed and
          developed by Creode
        </p>
        <p>T&Cs | Privacy Policy</p>
        <p>customerservices@joshuaellis1767.com | 01924 350 070</p>
      </div>
    </footer>
  );
};

export default Footer;
