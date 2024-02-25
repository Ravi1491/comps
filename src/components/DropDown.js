import React, { useState } from "react";

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
      <div key={option.value} onClick={() => handleSelection(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div className="bg-gray-200" onClick={handleClick}>
        {value?.label || "Select"}
      </div>
      {isOpen && <div className="bg-gray-100">{renderedItems}</div>}
    </div>
  );
};

export default DropDown;
