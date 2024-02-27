import React, { useState } from "react";
import { GoTriangleDown, GoTriangleLeft, GoX } from "react-icons/go";

const Accordion = ({ items, handleDeleteData }) => {
  console.log(items);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <div className="rounded m-5">
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <div key={item.id}>
            <div className="flex border-b mt-5">
              <div
                onClick={() => {
                  if (index === expandedIndex) {
                    setExpandedIndex(-1);
                  } else {
                    setExpandedIndex(index);
                  }
                }}
                className="flex w-11/12 border-2 p-4 items-center justify-start"
              >
                <span>{item.label}</span>
                <span className="text-xl ml-auto">
                  {isExpanded ? <GoTriangleDown /> : <GoTriangleLeft />}
                </span>
              </div>
              <div
                onClick={() => {
                  handleDeleteData(item);
                }}
                className="flex w-1/12 bg-red-400 items-center justify-center cursor-pointer"
              >
                <span className="px-2 text-xl ">
                  <GoX />
                </span>
              </div>
            </div>
            {isExpanded && (
              <div className="border-b border-x border-t p-5 bg-gray-100">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
