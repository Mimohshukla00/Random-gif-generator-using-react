import axios from "axios";
import React, { useState } from "react";

function Random() {
  const [gif, randomGif] = useState("");

  async function fetchData() {
    const API_KEY = "JYrYWzn37k0JrMz8XIezPGQWJ6QXBZ1a";
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    console.log(imageSrc);
    randomGif(imageSrc);

    // console.log(output);
  }

  

  const clickHandler = () => {
    fetchData();
  };
  return (
    <div
      className="w-1/2 h-[600px] bg-green-500 rounded-2xl 
    border-y-2 flex flex-col items-center gap-y-5 mt-[15px]
    border-blue ">
      <h1 className="text-3xl underline uppercase font-semibold">
        A Random Gif
      </h1>
      <img src={gif} width="450"></img>
      <button
        className="w-10/12 bg-white text-lg py-2 rounded-2xl"
        onClick={clickHandler}>
        Generate
      </button>
    </div>
  );
}

export default Random;
