import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleExpand = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const renderedItems = data.map((accordion, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    const { id, label, content } = accordion;
    return (
      <div key={id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleExpand(index)}
        >
          {label}
          {icon}
        </div>
        {isExpanded ? <div className="border-b p-5">{content}</div> : null}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
