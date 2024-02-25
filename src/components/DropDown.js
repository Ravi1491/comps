import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const renderedItems = options.map((option) => {
    return (
      <div
        key={option.value}
        className="border-t border-b p-3"
        onClick={() => handleSelection(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div
        className=" flex items-center justify-between p-3"
        onClick={handleClick}
      >
        {value?.label || "Select"}
        <span className="text-xl">
          <GoTriangleDown />
        </span>
      </div>
      {isOpen && <div>{renderedItems}</div>}
    </div>
  );
};

export default DropDown;
