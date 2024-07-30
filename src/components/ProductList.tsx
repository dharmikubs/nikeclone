import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <>
      <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
        <Link
          href="/test"
          className="mt-12 relative w-full flex flex-col gap-4 sm:w-[45%] lg:w-[25%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7d09109-ca02-4bc9-97b3-3d4c99c3a0c2/vaporfly-3-electric-road-racing-shoes-ZR5Glm.png"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Nike Vaporfly 3 Electric</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500">Road Racing Shoes</div>
          <button className="rounded-md font-bold py-3 px-4 hover:text-black hover:ring-1 hover:bg-white hover:ring-black text-[14px] bg-black text-white transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out">
            Add To Cart
          </button>
        </Link>
        <Link
          href="/test"
          className="mt-12 relative w-full flex flex-col gap-4 sm:w-[45%] lg:w-[25%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/86991b52-33a2-4e41-aace-c05510832f84/air-jordan-1-low-shoes-6Q1tFM.png"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Air Jordan 1 Low</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500">Men's Shoes</div>
          <button className="rounded-md font-bold py-3 px-4 hover:text-black hover:ring-1 hover:bg-white hover:ring-black text-[14px] bg-black text-white transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out">
            Add To Cart
          </button>
        </Link>
        <Link
          href="/test"
          className="mt-12 relative w-full flex flex-col gap-4 sm:w-[45%] lg:w-[25%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74314616-4fc7-460d-ab31-a8248b599a20/dunk-low-retro-shoes-bCzchX.png"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Nike Dunk Low Retro</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500">Men's Shoes</div>
          <button className="rounded-md font-bold py-3 px-4 hover:text-black hover:ring-1 hover:bg-white hover:ring-black text-[14px] bg-black text-white transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out">
            Add To Cart
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductList;
