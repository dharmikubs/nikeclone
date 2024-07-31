// "use client";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Suspense, useEffect } from "react";

const HomePage = async () => {
  // const WixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await WixClient.products.queryProducts().find();
  //     console.log(res);
  //   };
  //   getProducts();
  // }, [WixClient]);

  // const WixClient = await wixClientServer();
  // const res = await WixClient.products.queryProducts().find();
  // console.log(res);

  return (
    <>
      <div className="">
        <Slider />
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl font-bold">Featured Products</h1>
          <Suspense fallback={"Loading"}>
            <ProductList
              categoryId={process.env.FEATURED_PRODUCT_CATEGORY_ID!}
              limit={3}
            />
          </Suspense>
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl font-bold">Category</h1>
          <CategoryList />
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl font-bold">New Arrivals</h1>
          {/* <ProductList
            categoryId={process.env.FEATURED_PRODUCT_CATEGORY_ID!}
            limit={3}
          /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
