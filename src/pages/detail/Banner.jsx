import React from "react";
import { baseImgUrl } from "../../utils/constants";

const Banner = ({ movie }) => {
  return (
    <div
      className="h-[30vh]
    drop-shadow-[0_0_80px_rgba(255,255,255,0.25)] relative  "
    >
      <img
        className="size-full object-cover rounded-sm"
        src={baseImgUrl + movie.backdrop_path}
      />
      <div className="grid place-items-center bg-black bg-opacity-30 inset-0 absolute">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-mono">
          {movie.title}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
