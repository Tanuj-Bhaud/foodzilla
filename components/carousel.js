import React, { useMemo, useEffect, useState } from "react";
import Image from "next/image";

function Carousel() {
  const memoed = useMemo(() => {
    const data = ["1", "2", "3", "4", "5"];
    console.log("memoed once");
    return data;
  }, []);
  const [currentIndex, setCurrentIndex] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    console.log(currentIndex);
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (currentIndex > memoed.length - 1) {
      setCurrentIndex(0);
      console.log("i ran");
    }
  }, [currentIndex, memoed]);
  return (
    <>
      <div className="carousel-conatiner">
        {memoed.map((item, index) => (
          <>
            <Image
              className="carousel-item"
              style={{
                transform: `translate(-${currentIndex * 100}%)`,
              }}
              unoptimized={true}
              src={`/${item}.jpg`}
              key={index}
              width="100"
              height="100"
              alt="carousel item"
              priority
            />
          </>
        ))}
        <div className="border fixed bottom-[25rem] font-abril text-white text-[6rem] w-full flex justify-center items-center">
          Delicious Food
        </div>
        <div className=" fixed top-[16rem]  text-white text-[1rem] w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-center mb-5 w-[60rem]">
              When you have some text, how can you choose a typeface? Many
              people—professional designers included—go through an app’s font
              menu until we find one we like. But the aim of this module is to
              show that there are many considerations that can improve our type
              choices. By setting some useful constraints to aid our type
              selection, we can also develop a critical eye for analyzing type
              along the way.
            </p>
            <button className="text-white bg-orange-500 cursor-pointer hover:bg-orange-600 py-3 px-5 text-xl font-light  rounded-full w-max">
              Order Now
            </button>
          </div>{" "}
        </div>
        <div className="fixed bottom-[2rem]  w-full flex justify-center items-center">
          <div
            onClick={() => {
              setCurrentIndex(0);
            }}
            className="
           cursor-pointer bg-orange-500 text-white  h-5 w-5 rounded-full mr-2 flex items-center justify-center"
          >
            <span
              className={
                currentIndex === 0
                  ? "h-3 w-3 bg-black rounded-full"
                  : "h-3 w-3 bg-white rounded-full"
              }
            ></span>
          </div>
          <div
            onClick={() => {
              setCurrentIndex(1);
            }}
            className="
          cursor-pointer bg-orange-500 text-white  h-5 w-5 rounded-full mr-2 flex items-center justify-center"
          >
            <span
              className={
                currentIndex === 1
                  ? "h-3 w-3 bg-black rounded-full"
                  : "h-3 w-3 bg-white rounded-full"
              }
            ></span>
          </div>
          <div
            onClick={() => {
              setCurrentIndex(2);
            }}
            className="
          cursor-pointer bg-orange-500 text-white  h-5 w-5 rounded-full mr-2 flex items-center justify-center"
          >
            <span
              className={
                currentIndex === 2
                  ? "h-3 w-3 bg-black rounded-full"
                  : "h-3 w-3 bg-white rounded-full"
              }
            ></span>
          </div>

          <div
            onClick={() => {
              setCurrentIndex(3);
            }}
            className="
          cursor-pointer bg-orange-500 text-white  h-5 w-5 rounded-full mr-2 flex items-center justify-center"
          >
            <span
              className={
                currentIndex === 3
                  ? "h-3 w-3 bg-black rounded-full"
                  : "h-3 w-3 bg-white rounded-full"
              }
            ></span>
          </div>

          <div
            onClick={() => {
              setCurrentIndex(4);
            }}
            className="
          cursor-pointer bg-orange-500 text-white  h-5 w-5 rounded-full mr-2 flex items-center justify-center"
          >
            <span
              className={
                currentIndex === 4
                  ? "h-3 w-3 bg-black rounded-full"
                  : "h-3 w-3 bg-white rounded-full"
              }
            ></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
