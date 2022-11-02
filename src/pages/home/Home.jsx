import React from "react";
import BottomMid from "./BottomMid";
import Hero from "./Hero";
import { Mid } from "./Mid";

const Home = () => {
  return (
    <>
      <Hero />
      <Mid />
      <BottomMid />
    </>
  );
};

export default Home;

// import React from "react";

// export default function Home() {
//   return (
//     <>

//       {/* <div className="grid grid-rows-5 text-center p-5 opacity-70">
//         <div className="bg-purple-500 h-80 w-200 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300">
//           <div className="text-white text-9xl">hello world</div>
//         </div>
//         <div className="bg-purple-300 h-80 w-200 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
//           <div className="text-white text-9xl">This Is</div>
//         </div>
//         <div className="bg-purple-200 h-80 w-200 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300">
//           <div className="text-white text-9xl">STEVEN And ROY'S</div>
//         </div>
//         <div className="bg-purple-100 h-80 w-200 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 duration-300">
//           <span className="text-white text-9xl border-gray-600">BLOG</span>
//         </div>
//         <div className="bg-indigo-300 h-80 w-200 rounded-md delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300">
//           <div className="text-white text-9xl">Welcome</div>
//         </div>
//       </div> */}
//     </>
//   );
// }
