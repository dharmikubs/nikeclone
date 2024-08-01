import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import React from "react";

const ListPage = () => {
  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        <div className="bg-black flex justify-between h-72 rounded-md">
          {/* text  */}
          <div className="w-2/3 text-white flex flex-col items-start justify-center p-8">
            <h2 className="font-semibold xl:text-4xl text-lg sm:text-xl md:text-2xl leading-[48px]">
              {"Don't"} Just Wear It,
            </h2>
            <span className="font-semibold xl:text-4xl text-lg sm:text-xl md:text-2xl leading-[48px] mb-4">
              Just Do It.
            </span>
            <button className="rounded-full bg-white text-black w-max py-3 px-5 md:text-sm">
              Shop Now
            </button>
          </div>
          {/* image  */}
          <div className="relative w-1/3">
            <Image
              src="https://static.nike.com/a/images/w_1920,c_limit/77e79006-1593-4174-8aa5-bdce318eb28b/air-jordan-1-2022-lost-and-found-chicago-the-inspiration-behind-the-design.jpg"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
        <Filter />
        {/* products  */}
        <h3 className="font-semibold text-xl mt-12">Shoes For You !</h3>
        <ProductList
          categoryId={process.env.FEATURED_PRODUCT_CATEGORY_ID!}
          limit={3}
        />
      </div>
    </>
  );
};

export default ListPage;
