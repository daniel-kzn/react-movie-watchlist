import React, { FC } from "react";

interface MovieCardProps {
  title?: string;
  image?: string;
}

const MovieCard: FC<MovieCardProps> = ({ title, image }) => {
  return (
    <div className="flex flex-col justify-center w-auto h-auto">
      <img src={image} />
      <div className="text-white">{title}</div>
    </div>
  );
};

export default MovieCard;
