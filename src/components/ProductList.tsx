import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  console.log(categoryId);

  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <>
      <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {res.items.map((product: products.Product) => (
          <Link
            href={"/" + product.slug}
            className="mt-12 relative w-full flex flex-col gap-4 sm:w-[45%] lg:w-[25%]"
            key={product._id}
          >
            <div className="relative w-full h-80 group">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-md"></div>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">₹ {product.price?.price}</span>
            </div>
            <div className="text-sm text-gray-500">Road Racing Shoes</div>
            <button className="rounded-md font-bold py-3 px-4 hover:text-black hover:ring-1 hover:bg-white hover:ring-black text-[14px] bg-black text-white transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out">
              Add To Cart
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductList;

// import { wixClientServer } from "@/lib/wixClientServer";
// import { products } from "@wix/stores";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const PRODUCT_PER_PAGE = 20;

// const ProductList = async ({
//   categoryId,
//   limit,
// }: {
//   categoryId: string;
//   limit?: number;
// }) => {
//   const WixClient = await wixClientServer();

//   const res = await WixClient.products
//     .queryProducts()
//     .eq("collectionIds", categoryId)
//     .limit(limit || PRODUCT_PER_PAGE)
//     .find();

//   return (
//     <>
//       <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
//         {res.items.map((product: products.Product) => (
//           <Link
//             href="/test"
//             className="mt-12 relative w-full flex flex-col gap-4 sm:w-[45%] lg:w-[25%]"
//             key={product._id}
//           >
//             <div className="relative w-full h-80 group">
//               <Image
//                 src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7d09109-ca02-4bc9-97b3-3d4c99c3a0c2/vaporfly-3-electric-road-racing-shoes-ZR5Glm.png"
//                 alt=""
//                 fill
//                 sizes="25vw"
//                 className="absolute object-cover rounded-md"
//               />
//               <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-md"></div>
//             </div>
//             <div className="flex justify-between">
//               <span className="font-medium">Nike Vaporfly 3 Electric</span>
//               <span className="font-semibold">$ 275</span>
//             </div>
//             <div className="text-sm text-gray-500">Road Racing Shoes</div>
//             <button className="rounded-md font-bold py-3 px-4 hover:text-black hover:ring-1 hover:bg-white hover:ring-black text-[14px] bg-black text-white transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out">
//               Add To Cart
//             </button>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductList;
