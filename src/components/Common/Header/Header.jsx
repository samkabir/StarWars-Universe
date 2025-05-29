import React from "react";
import { Link } from "react-router-dom";
import NavCard from "../../UI/Cards/NavCard";

const Header = () => {
    const links = [
        {
            to: "/",
            label: "People"
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
    <div className="p-8 text-center bg-gray-900 w-full flex justify-center items-center">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {
            links.map((link) => (
                <Link
                    key={link.to}
                    to={link.to}
                    className="text-white font-bold"
                >
                    <NavCard label={link.label} route={link.to} />
                </Link>
            ))
        }
      </div>
    </div>
  );
};

export default Header;