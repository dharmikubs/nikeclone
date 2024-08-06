"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <>
      <div className="mt-12 flex justify-center space-x-2 w-full">
        <button
          className="rounded-md bg-black text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-black/[0.3]"
          disabled={!hasPrev}
          onClick={() => createPageUrl(currentPage - 1)}
        >
          Prev
        </button>
        <button
          className="rounded-md bg-black text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-black/[0.3]"
          disabled={!hasNext}
          onClick={() => createPageUrl(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
