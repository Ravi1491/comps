import React, { useState } from "react";
import DropDown from "../components/DropDown";

const DropDownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  const items = [
    {
      label: "red-color",
      value: "red",
    },
    {
      label: "blue-color",
      value: "blue",
    },
    {
      label: "green-color",
      value: "green",
    },
    {
      label: "pink-color",
      value: "pink",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center my-5 text-2xl font-bold underline">
        Drop Down Page
      </div>
      <div className="mx-auto border w-2/12 text-center ">
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
