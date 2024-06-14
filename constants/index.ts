export const paragraph =
  "Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.";

export const cardContent = [
  {
    id: 1,
    name: "Cappuccino",
    image:
      "/assets/coffee/cappuccino.jpeg",
    price: "$5.20",
    rating: 4.7,
    votes: 65,
    popular: true,
    available: true,
  },
  {
    id: 2,
    name: "House Coffee",
    image:
      "/assets/coffee/house-coffee.jpeg",
    price: "$3.50",
    rating: 4.85,
    votes: 15,
    popular: true,
    available: true,
  },
  {
    id: 3,
    name: "Espresso",
    image:
      "/assets/coffee/espresso.jpeg",
    price: "$2.50",
    rating: 4.9,
    votes: 55,
    popular: false,
    available: true,
  },
  {
    id: 4,
    name: "Coffee Latte",
    image:
      "/assets/coffee/coffee-latte.jpeg",
    price: "$4.50",
    rating: 5.0,
    votes: 23,
    popular: false,
    available: true,
  },
  {
    id: 5,
    name: "Chocolate Coffee",
    image:
      "/assets/coffee/chocolate-coffee.jpeg",
    price: "$4.00",
    rating: 4.65,
    votes: 122,
    popular: false,
    available: false,
  },
  {
    id: 6,
    name: "Valentine Special",
    image:
      "/assets/coffee/valentine-special.jpeg",
    price: "$5.50",
    rating: null,
    votes: 0,
    popular: false,
    available: true,
  },
];


// <div className="absolute top-0 left-0 w-full flex items-center justify-center z-20">
//         <div className="h-[fit-content] bg-[#1B1D1F] gap-4 rounded-xl flex flex-col justify-start items-start w-[80%] m-32">
//           <div className="h-[42%] sm:h-[38%] md:h-[30%] pt-4 w-full flex flex-col justify-start items-center">
//             <div className="z-10  w-[46%] flex items-end justify-end">
//               <Image
//                 src={`/assets/vector.svg`}
//                 width={250}
//                 height={100}
//                 alt="Vector"
//                 className=""
//               />
//             </div>
//             <div className="gap-1 font-medium z-20 mt-10 flex flex-col justify-center items-center w-[38vw] absolute">
//               <h1 className="text-[32px] font-semibold text-center">
//                 Our Collection
//               </h1>
//               <p className="text-center font-medium text-[#6F757C] text-[16px]">
//                 {paragraph}
//               </p>
//               <div className="gap-3 flex justify-center mt-4 items-center">
//                 <button className="text-[#FEF7EE] bg-[#6F757C] text-[14px] py-2 px-3 rounded-lg">
//                   All Products
//                 </button>
//                 <p className="text-center text-[#FEF7EE] text-[14px] py-2 px-3 rounded-lg cursor-pointer">
//                   Available Now
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Cards  */}
//           <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-8">
//             {cardContent.map(
//               ({
//                 id,
//                 name,
//                 image,
//                 price,
//                 rating,
//                 votes,
//                 popular,
//                 available,
//               }) => {
//                 return (
//                   <Card
//                     id={id}
//                     name={name}
//                     image={image}
//                     price={price}
//                     rating={rating}
//                     votes={votes}
//                     popular={popular}
//                     available={available}
//                   />
//                 );
//               }
//             )}
//           </div>
//         </div>
//       </div>
