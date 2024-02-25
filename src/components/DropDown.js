import React, { useEffect, useState, useRef } from "react";
import { GoTriangleDown } from "react-icons/go";
import Panel from "./Panel";

const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handle = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handle, true);

    return () => {
      document.removeEventListener("click", handle);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (option) => {
    setIsOpen(false);
    onChange(option);
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
    <div ref={divEl} className="w-48">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select"}
        <GoTriangleDown />
      </Panel>
      {isOpen && <Panel className="p-0">{renderedItems}</Panel>}
    </div>
  );
};

export default DropDown;
