import masonry6 from "@/assets/images/item4.webp";
import masonry1 from "@/assets/images/masonry1.webp";
import masonry3 from "@/assets/images/masonry2.webp";
import masonry2 from "@/assets/images/masonry3.webp";
import masonry4 from "@/assets/images/masonry4.webp";
import masonry5 from "@/assets/images/masonry5.webp";
import Image from "next/image";

const ImageMasonry = () => {
  const images = [
    {
      id: 1,
      src: masonry1,
      alt: "Mountain landscape",
      className: "col-start-1 col-end-2 row-start-1 row-end-2",
      title: "Scarves",
    },
    {
      id: 2,
      src: masonry2,
      alt: "Forest path",
      className: "col-start-1 col-end-2 row-start-2 row-end-3",
      title: "Stoles",
    },
    {
      id: 3,
      src: masonry3,
      alt: "Ocean waves",
      className: "col-start-2 col-end-3 row-start-1 row-end-3",
    },
    {
      id: 4,
      src: masonry4,
      alt: "City skyline",
      className: "col-start-3 col-end-5 row-start-1 row-end-2",
    },
    {
      id: 5,
      src: masonry5,
      alt: "Desert dunes",
      className: "col-start-3 col-end-4 row-start-2 row-end-3",
      title: "Homeware",
    },
    {
      id: 6,
      src: masonry6,
      alt: "Winter trees",
      className: "col-start-4 col-end-5 row-start-2 row-end-3",
      title: "Classic Collection",
    },
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full h-full mt-20 max-h-screen">
      {images.map((image) => (
        <div
          key={image.id}
          className={`${image.className} group cursor-pointer overflow-hidden   relative bg-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl `}
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {image.title && (
            <div className="absolute bottom-2 w-full flex flex-col items-center justify-center font-tenor">
              <h2 className="text-3xl font-tenor text-white font-medium w-1/2 text-center leading-[normal] mb-2 uppercase">
                {image.title}
              </h2>
              <button className="text-[#baa570] hover:bg-[#baa570] hover:text-black py-2 px-9 text-sm">
                DISCOVER
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageMasonry;
