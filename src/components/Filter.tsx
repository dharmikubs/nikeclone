import React from "react";

const Filter = () => {
  return (
    <>
      <div className="mt-12 flex justify-between flex-col md:flex-row gap-y-4 md:gap-y-0">
        <div className="flex gap-6 items-center justify-between md:justify-normal">
          <div className="relative inline-block">
            <select
              name="gender"
              id=""
              className="py-2 px-4 pr-10 rounded-full text-xs font-medium bg-gray-200 appearance-none"
            >
              <option>Select Gender</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
          <div className="relative inline-block">
            <select
              name="gender"
              id=""
              className="py-2 px-4 pr-10 rounded-full text-xs font-medium bg-gray-200 appearance-none"
            >
              <option>Select Product</option>
              <option value="jordan">Jordans</option>
              <option value="lifestyle">Life Style</option>
              <option value="basketball">Basket Ball</option>
              <option value="running">Running Shoes</option>
              <option value="training">Training & Gym</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative inline-block">
            <select
              name="price"
              id=""
              className="py-2 px-4 pr-10 rounded-full text-xs font-medium bg-gray-200 appearance-none"
            >
              <option>Sort By</option>
              <option value="lowtohigh">Price (Low to High)</option>
              <option value="hightolow">Price (High to Low)</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
