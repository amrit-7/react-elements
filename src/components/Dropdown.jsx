import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Dropdown = ({ options, showValue, setShowValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (value, title) => {
    setShowValue(title);
    setIsOpen(false);
  };
  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };
  const icon = isOpen ? <GoChevronLeft /> : <GoChevronDown />;

  const renderedItems = options.map((option) => {
    const { label, value, id } = option;
    return (
      <div
        onClick={() => handleClick(value, label)}
        className="border p-2"
        key={id}
      >
        {label}
      </div>
    );
  });
  return (
    <div
      className="w-48 relative"
      style={{
        height: "90vh",
      }}
    >
      <div className="border rounded">
        <div
          onClick={handleOpenClick}
          className="flex bg-gray-100 px-3 py-2 justify-between items-center"
        >
          <span>{showValue ? showValue : "Select option"}</span>
          {icon}
        </div>
        {isOpen ? <div className="w-full absolute">{renderedItems}</div> : null}
      </div>
    </div>
  );
};

export default Dropdown;
