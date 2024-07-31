import React from "react";

const CustomizeProducts = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <h2>Choose a size</h2>
        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-3 flex-wrap">
            <li className="w-[106px] py-3 px-6 text-black border border-gray-100 bg-gray-100 rounded-md  text-sm cursor-not-allowed text-center font-semibold">
              UK 6
            </li>
            <li className="w-[106px] py-3 px-6 bg-white border border-black rounded-md  text-sm cursor-pointer text-center font-semibold">
              UK 6.5
            </li>
            <li className="w-[106px] py-3 px-6 bg-white border border-gray-100 rounded-md  text-sm cursor-pointer text-center font-semibold">
              UK 7
            </li>
            <li className="w-[106px] py-3 px-6 bg-white border border-gray-100 rounded-md  text-sm cursor-pointer text-center font-semibold">
              UK 7.5
            </li>
            <li className="w-[106px] py-3 px-6 bg-white border border-gray-100 rounded-md  text-sm cursor-pointer text-center font-semibold">
              UK 8
            </li>
            <li className="w-[106px] py-3 px-6 bg-white border border-gray-100 rounded-md  text-sm cursor-pointer text-center font-semibold">
              UK 8.5
            </li>
            <li className="w-[106px] py-3 px-6 bg-white border border-gray-100 rounded-md  text-sm cursor-pointer text-center font-semibold">
              UK 9
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CustomizeProducts;
