import React, { useEffect, useState } from "react";
import axios from "axios";

function Tag() {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("car");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData() {
    const API_KEY = "JYrYWzn37k0JrMz8XIezPGQWJ6QXBZ1a";
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    setLoading(true);
    setError(""); // Reset error before fetching

    try {
      const { data } = await axios.get(url);
      const imageSrc = data.data.images.downsized_large.url;
      console.log(imageSrc);
      setGif(imageSrc);
    } catch (err) {
      setError("Failed to fetch GIF. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [tag]); // Fetch GIF when the tag changes

  const clickHandler = () => {
    fetchData();
  };

  const changeHandler = (event) => {
    setTag(event.target.value);
  };

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-5 p-5 shadow-lg">
      <h1 className="text-2xl underline uppercase font-bold">Random GIF</h1>

      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-3 text-center border border-gray-300 focus:border-blue-700 focus:outline-none"
        type="text"
        placeholder="Enter a tag"
        onChange={changeHandler}
      />

      <button
        onClick={clickHandler}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-2xl transition duration-300 ease-in-out hover:bg-yellow-400">
        {loading ? "Generating..." : "Generate"}
      </button>

      {error && <p className="text-red-600">{error}</p>}
      {gif && (
        <img
          src={gif}
          alt="Random GIF"
          className="mt-3 rounded-lg border border-gray-400"
        />
      )}
    </div>
  );
}

export default Tag;
