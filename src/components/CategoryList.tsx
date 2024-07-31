import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <>
      <div className="px-4 overflow-x-scroll category-scrollbar">
        <div className="flex gap-4 md:gap-8">
          <Link
            href="/list?category=test"
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-12"
          >
            <div className="relative bg-slate-100 w-full h-96 group">
              <Image
                src="https://static.nike.com/a/images/w_1920,c_limit/c4381ecb-a293-4406-895d-3d63e7c9f923/the-best-air-force-1s-to-buy-right-now.jpg"
                alt=""
                fill
                sizes="20vw"
                className="absolute object-cover rounded-md"
              ></Image>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-md"></div>
            </div>
            <h3 className="mt-8 font-semibold tracking-wide text-xl pb-4 text-gray-500">
              Life-style
            </h3>
          </Link>
          <Link
            href="/list?category=test"
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-12"
          >
            <div className="relative bg-slate-100 w-full h-96 group">
              <Image
                src="https://images.pexels.com/photos/11776782/pexels-photo-11776782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                fill
                sizes="20vw"
                className="absolute object-cover rounded-md"
              ></Image>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-md"></div>
            </div>
            <h3 className="mt-8 font-semibold tracking-wide text-xl pb-4 text-gray-500">
              Jordans
            </h3>
          </Link>
          <Link
            href="/list?category=test"
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-12"
          >
            <div className="relative bg-slate-100 w-full h-96 group">
              <Image
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS_i7mUfFz5gVatmfRHz5Cwaa7Eak1G0qGCIZiTl_-2D2YjewDZ3i6RJLud_KRl3BiuudXXe4fLF8po0ogYsZZfVi1PcyV6I1Jo69U7NMo"
                alt=""
                fill
                sizes="20vw"
                className="absolute object-cover rounded-md"
              ></Image>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-md"></div>
            </div>
            <h3 className="mt-8 font-semibold tracking-wide text-xl pb-4 text-gray-500">
              Running Shoes
            </h3>
          </Link>
          <Link
            href="/list?category=test"
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-12"
          >
            <div className="relative bg-slate-100 w-full h-96 group">
              <Image
                src="https://static.nike.com/a/images/w_1920,c_limit/7ae39351-e56b-4d0f-a218-7a0eeed687fb/best-nike-basketball-shoes-for-guards.jpg"
                alt=""
                fill
                sizes="20vw"
                className="absolute object-cover rounded-md"
              ></Image>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-md"></div>
            </div>
            <h3 className="mt-8 font-semibold tracking-wide text-xl pb-4 text-gray-500">
              Basket Ball
            </h3>
          </Link>
          <Link
            href="/list?category=test"
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-12"
          >
            <div className="relative bg-slate-100 w-full h-96 group">
              <Image
                src="https://static.nike.com/a/images/w_1920,c_limit/89f57112-295f-4971-bb54-da6e86f5f31f/the-best-nike-crossfit-shoes.jpg"
                alt=""
                fill
                sizes="20vw"
                className="absolute object-cover rounded-md"
              ></Image>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-md"></div>
            </div>
            <h3 className="mt-8 font-semibold tracking-wide text-xl pb-4 text-gray-500">
              Traning & Gym
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
