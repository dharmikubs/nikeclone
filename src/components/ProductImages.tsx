"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  const images = [
    {
      id: 1,
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/114cda05-4ca8-4d26-ab8a-0d171ec9b691/ZOOMX+VAPORFLY+NEXT%25+3+OLY.png",
    },
    {
      id: 2,
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db89d9a8-feac-4245-a160-7a773bc23da1/ZOOMX+VAPORFLY+NEXT%25+3+OLY.png",
    },
    {
      id: 3,
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5957d6d3-c529-4b3d-bdc3-59904c64f294/ZOOMX+VAPORFLY+NEXT%25+3+OLY.png",
    },
    {
      id: 4,
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4957c67e-0544-442c-b13b-9c4b11c910e6/ZOOMX+VAPORFLY+NEXT%25+3+OLY.png",
    },
  ];
  return (
    <>
      <div className="">
        <div className="h-[500px] relative">
          <Image
            src={images[index].url}
            alt=""
            fill
            sizes="50vw"
            className="object-contain rounded-md"
          />
        </div>
        <div className="flex justify-between gap-4 mt-8">
          {images.map((img, i) => (
            <div
              className="w-1/4 h-32 relative gap-4 mt-8 group"
              key={img.id}
              onClick={() => setIndex(i)}
            >
              <Image
                src={img.url}
                alt=""
                fill
                sizes="30vw"
                className="absolute object-contain rounded-md cursor-pointer"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-md cursor-pointer"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductImages;
