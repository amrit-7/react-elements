import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const allLinks = [
    { lable: "Accordion", path: "/" },
    { lable: "Button", path: "/button" },
    { lable: "Dropdown", path: "/dropdown" },
    { lable: "Modal", path: "/modal" },
    { lable: "Table", path: "/table" },
    { lable: "Counter", path: "/counter" },
  ];
  const renderedLinks = allLinks.map((link) => {
    const { lable, path } = link;
    return (
      <Link
        className="p-3 border bg-blue-50 hover:bg-teal-400 hover:text-teal-50"
        key={lable}
        to={path}
      >
        {lable}
      </Link>
    );
  });
  return (
    <div className="flex top-0 flex-col sticky overflow-y-scroll h-screen bg-teal-100">
      {renderedLinks}
    </div>
  );
};

export default SideBar;
