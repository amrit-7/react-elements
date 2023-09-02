import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  const options = [
    {
      id: 1,
      label: "I want mild",
      value: "mild",
    },
    {
      id: 2,
      label: "I want spicy",
      value: "spicy",
    },
    {
      id: 3,
      label: "Give me Extra Spicy",
      value: "extraspicy",
    },
  ];
  const [showValue, setShowValue] = useState("");
  console.log(
    "🚀 ~ file: dropdownpage.jsx:23 ~ DropdownPage ~ showValue:",
    showValue
  );

  return (
    <div>
      <Dropdown
        options={options}
        showValue={showValue}
        setShowValue={setShowValue}
      />
    </div>
  );
};

export default DropdownPage;
