import Card from "@/components/Card";
import { cardContent, paragraph } from "@/constants";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-full relative">
      <div className="z-10 h-[40vh] relative">
        <Image
          src="/assets/bg-cafe.jpg"
          layout="fill"
          objectFit="cover"
          alt="cafe img"
        />
      </div>

      <div className="py-40 px-10 md:px-32 w-full h-[fit-content]  absolute top-0 left-0 z-20">
        <div className="bg-[#1B1D1F] flex flex-col justify-start items-start pb-20 rounded-xl pt-8">
          <div className="w-full text-center flex flex-col justify-center items-center">
            <div
              className="flex flex-col justify-center items-center bg-contain w-[50%] text-center gap-4  bg-right-top"
              style={{
                backgroundImage: "url('/assets/vector.svg')",
                backgroundSize: "51%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col gap-3 p-4 my-10 w-[40vw]">
                <p className="text-[32px] font-medium">Our Collection</p>
                <p className="text-center text-[#6F757C] font-medium text-[16px]">
                  {paragraph}
                </p>
                <div className="flex justify-center font-medium items-center gap-3">
                  <button className="text-[#FEF7EE] bg-[#6F757C] text-[14px] py-2 px-3 rounded-lg">
                    All Products
                  </button>
                  <p className="text-center text-[#FEF7EE] text-[14px] py-2 px-3 rounded-lg cursor-pointer">
                    Available Now
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Cards  */}
         <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-8">
            {cardContent.map(
              ({
                id,
                name,
                image,
                price,
                rating,
                votes,
                popular,
                available,
              }) => {
                return (
                  <Card
                    id={id}
                    name={name}
                    image={image}
                    price={price}
                    rating={rating}
                    votes={votes}
                    popular={popular}
                    available={available}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
