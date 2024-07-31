import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  return (
    <>
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
        {/* img  */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages />
        </div>
        {/* text  */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-medium capitalize">
            Nike Vaporfly 3 Electric
          </h1>
          <span className="text-gray-500 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            reprehenderit porro corporis consequuntur quos libero est voluptate
            vel, natus sunt voluptates, aut tempore molestiae culpa labore
            tenetur eos dolor explicabo.
          </span>
          <div className="h-[1px] bg-gray-100" />
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-medium text-gray-500 line-through">
              $59
            </h3>
            <h2 className="font-bold text-2xl">$49</h2>
          </div>
          <div className="h-[1px] bg-gray-100" />
          <CustomizeProducts />
          <Add />
          <div className="h-[1px] bg-gray-100" />
          <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              blanditiis tempore nulla? Modi aliquid, commodi mollitia sit
              reiciendis obcaecati optio dolores, voluptas aspernatur,
              perferendis repellat. Quisquam ipsa officia libero ea?
            </span>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              blanditiis tempore nulla? Modi aliquid, commodi mollitia sit
              reiciendis obcaecati optio dolores, voluptas aspernatur,
              perferendis repellat. Quisquam ipsa officia libero ea?
            </span>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              blanditiis tempore nulla? Modi aliquid, commodi mollitia sit
              reiciendis obcaecati optio dolores, voluptas aspernatur,
              perferendis repellat. Quisquam ipsa officia libero ea?
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
