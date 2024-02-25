import React, { useState } from "react";
import DropDown from "../components/DropDown";

const DropDownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  const items = [
    {
      label: "Red-color",
      value: "red",
    },
    {
      label: "Blue-color",
      value: "blue",
    },
    {
      label: "Green-color",
      value: "green",
    },
    {
      label: "Pink-color",
      value: "pink",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center my-5 text-2xl font-bold underline">
        Drop Down Page
      </div>
      <div className="flex justify-evenly">
        <DropDown
          options={items}
          value={selection}
          onChange={handleSelection}
        />
        <DropDown
          options={items}
          value={selection}
          onChange={handleSelection}
        />
      </div>
    </div>
  );
};

export default DropDownPage;
