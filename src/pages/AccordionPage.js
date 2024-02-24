import React, { useState } from "react";
import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // if (!title.length > 0 && !content.length > 0) {
    //   return "Fill all the required fields";
    // }
    const value = {
      id: Math.floor(Math.random() * 100),
      label: title,
      content,
    };

    setData([...data, value]);
    setTitle("");
    setContent("");
  };

  const handleDeleteData = (item) => {
    const updatedData = data.filter((d) => {
      return d.id !== item.id;
    });

    setData([...updatedData]);
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center mt-5">Accordion Page</h1>
      </div>
      <div>
        <form onSubmit={handleFormSubmit} className="flex justify-center my-5">
          <label>Title:</label>
          <input
            value={title}
            className="border-2 mx-2 p-1"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Content:</label>
          <input
            value={content}
            className="border-2 mx-2 p-1"
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="border-2 px-4">Submit</button>
        </form>
      </div>
      <div className="my-4">
        <Accordion items={data} handleDeleteData={handleDeleteData} />
      </div>
    </div>
  );
};

export default AccordionPage;