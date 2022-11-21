import React, { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <nav className="flex justify-between items-center px-20 py-6 bg-[#121212] text-white">
      <h1>Watch Movie</h1>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li>Watch</li>
          <li>My Watchlist</li>
          <button className="bg-black p-2 rounded-md">Login</button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
