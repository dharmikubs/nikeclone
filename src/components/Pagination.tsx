"use client";

const Pagination = () => {
  return (
    <>
      <div className="mt-12 flex justify-between">
        <button className="rounded-md bg-black text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-black/[0.3]">
          {`<`}
        </button>
        <button className="rounded-md bg-black text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-black/[0.3]">
          {`>`}
        </button>
      </div>
    </>
  );
};

export default Pagination;
