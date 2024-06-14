import Image from "next/image";
import React from "react";

interface CardProps {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number | null;
  votes: number;
  popular: boolean;
  available: boolean;
}

const Card = ({
  id,
  name,
  image,
  price,
  rating,
  votes,
  popular,
  available,
}: CardProps) => {
  return (
    <div className="font-medium overflow-hidden flex flex-col justify-start items-start rounded-lg">
      <Image
        src={image}
        alt={name}
        width={260}
        height={160}
        className="w-full rounded-lg"
      />
      <div className="absolute pl-1">
        {popular && (
          <button className="bg-[#F6C768] font-semibold px-3 py-[2px] text-[#1B1D1F] text-[10px] rounded-2xl">
            Popular
          </button>
        )}
      </div>
      <div className="w-full mt-2 flex justify-between items-center">
        <p className="">{name}</p>
        <span className="bg-[#BEE3CC] text-[#111315] text-[12px] px-2 py-[2px] font-semibold rounded-[5px]">
          {price}
        </span>
      </div>

      <div className="mt-2 w-full flex justify-between items-center">
        <div className="flex items-center justify-center text-[14px]">
          <div className="flex justify-between items-center gap-1">
            {rating !== null ? (
              <Image
                src="/assets/Star_fill.svg"
                width={25}
                height={25}
                alt="Star"
              />
            ) : (
              <Image src="/assets/Star.svg" width={25} height={25} alt="Star" />
            )}
            <p className="text-[14px] text-[#FEF7EE]">{rating !== null ? (rating) : ("0")}</p>
            <p className="text-[14px] text-[#6F757C] font-semibold">{votes && votes > 0 ? (`(${votes} votes)`) : (`No ratings`)}</p>
          </div>
        </div>


        <p className="px-1 sm:text-[14px] text-[#ED735D] font-semibold">{!available && (`Sold out`)}</p>

      </div>
    </div>
  );
};

export default Card;
