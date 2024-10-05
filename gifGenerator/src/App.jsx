import { useState } from "react";
import Random from "./Components/Random";
import Tag from "./Components/Tag";

function App() {
  return (
    <>
      <div className="w-full relative h-screen items-center overflow-hidden flex-col bg-teal-950">
        <h1 className="bg-white absolute rounded-sm w-full text-center mt-[40px] ml-[25px] mr-[25px] py-2 px-10 text-3xl font-extrabold ">
          RANDOM GIF GENERATOR
        </h1>
        <div className="flex flex-col items-center w-full mt-40 ">
          <Random></Random>
          <Tag></Tag>
        </div>
      </div>
    </>
  );
}

export default App;
