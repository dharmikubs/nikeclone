import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import Loader from "@/utils/Loader";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {res.items.map((product: products.Product) => {
        const sanitizedDescription = DOMPurify.sanitize(
          product.description || ""
        );

        return (
          <Link
            href={"/" + product.slug}
            className="mt-12 relative w-[95%] flex flex-col gap-4 "
            key={product._id}
          >
            <div className="relative w-full h-80 group">
              <Suspense fallback={<Loader />}>
                <Image
                  src={product.media?.mainMedia?.image?.url || "/product.png"}
                  alt=""
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md"
                />
              </Suspense>

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-md"></div>
            </div>
            <div className="flex justify-between w-full">
              <span className="font-medium w-2/3 truncate">{product.name}</span>
              {product.price?.price === product.price?.discountedPrice ? (
                <span className="font-semibold">₹ {product.price?.price}</span>
              ) : (
                <span className="font-semibold">
                  ₹ {product.price?.discountedPrice}
                </span>
              )}
            </div>
            <div>
              <span
                className="font-medium text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: sanitizedDescription,
                }}
              ></span>
            </div>
            <button className="rounded-md font-bold py-3 px-4 hover:text-black hover:ring-1 hover:bg-white hover:ring-black text-[14px] bg-black text-white transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out">
              Add To Cart
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
