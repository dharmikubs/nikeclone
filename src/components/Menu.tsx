"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.documentElement.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <div className="">
        <Image
          src="/menu.png"
          alt=""
          width={28}
          height={28}
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />
        {open && (
          <div className="absolute overflow-y-auto bg-black/[0.9] z-30 text-white left-0 top-20 w-full p-4 h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Logout</Link>
            <Link href="/">Cart(1)</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
