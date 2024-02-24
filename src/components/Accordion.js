import React, { useState } from "react";
import { GoTriangleDown, GoTriangleLeft, GoX } from "react-icons/go";

const Accordion = ({ items, handleDeleteData }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <div className="border-x border-t rounded m-5">
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <div key={item.id}>
            <div className="flex bg-gray-50 border-b">
              <div
                onClick={() => {
                  if (index === expandedIndex) {
                    setExpandedIndex(-1);
                  } else {
                    setExpandedIndex(index);
                  }
                }}
                className=" flex w-11/12 border-8 bg-gray-200 items-center justify-start"
              >
                <span>{item.label}</span>
                <span className="text-xl ml-auto">
                  {isExpanded ? <GoTriangleDown /> : <GoTriangleLeft />}
                </span>
              </div>
              <div
                onClick={() => {
                  console.log("CLICK DELETE", handleDeleteData(item));
                }}
                className="flex w-1/12 bg-red-400 items-center justify-center py-2"
              >
                <span className="px-2 text-xl cursor-pointer ">
                  <GoX />
                </span>
              </div>
            </div>
            {isExpanded && <div className="border-b p-5">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
