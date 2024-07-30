"use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const slides = [
//   {
//     id: 1,
//     img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
//     url: "/",
//   },
//   {
//     id: 2,
//     img: "/slide-2.png",
//     url: "/",
//   },
//   {
//     id: 3,
//     img: "/slide-3.png",
//     url: "/",
//   },
// ];

// const Slider = () => {
//   const [current, setCurrent] = useState(0);

//   // Uncomment this if you want the slider to auto-advance
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   //   }, 3000);
//   //   return () => clearInterval(interval);
//   // }, []);

//   return (
//     <div className="h-[calc(100vh-80px)] overflow-hidden relative">
//       <div
//         className="w-max h-full flex transition-all ease-in-out duration-1000"
//         style={{ transform: `translateX(-${current * 100}vw)` }}
//       >
//         {slides.map((slide) => (
//           <div
//             className={`w-screen h-full flex items-center justify-center relative`}
//             key={slide.id}
//           >
//             {/* IMAGE CONTAINER */}
//             <div className="w-full h-full relative">
//               <Image
//                 src={slide.img}
//                 alt={`Slide ${slide.id}`}
//                 fill
//                 sizes="100%"
//                 className="aspect-[16/10] md:aspect-auto object-cover"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="absolute left-[43%] xl:left-1/2 bottom-8 flex gap-4">
//         {slides.map((slide, index) => (
//           <div
//             className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
//               current === index ? "scale-150" : ""
//             }`}
//             key={slide.id}
//             onClick={() => setCurrent(index)}
//           >
//             {current === index && (
//               <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
// pages/components/HeroBanner.jsx

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

const images = [
  { id: 1, src: "/slide-2.png", alt: "Slide 1" },
  { id: 2, src: "/slide-3.png", alt: "Slide 2" },
  { id: 3, src: "/slide-1.png", alt: "Slide 3" },
];

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        {images.map((image) => (
          <div key={image.id}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={1920}
              height={1080}
              className="object-cover slider_img"
            />
            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-sm md:text-lg uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
