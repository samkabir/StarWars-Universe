import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const links = [
        {
            to: "/",
            label: "Home"
        },
        {
            to: "/films",
            label: "Films"
        },
        {
            to: "/planets",
            label: "Planets"
        },
        {
            to: "/species",
            label: "Species"
        },
        {
            to: "/starships",
            label: "Starships"
        },
        {
            to: "/vehicles",
            label: "Vehicles"
        }
    ];
  return (
    <div className="p-8 text-center bg-red-100 w-full flex justify-center items-center">
      <div className="flex justify-center items-center gap-4">
        {
            links.map((link) => (
                <Link
                    key={link.to}
                    to={link.to}
                    className="text-black font-bold hover:underline"
                >
                    {link.label}
                </Link>
            ))
        }
      </div>
    </div>
  );
};

export default Header;