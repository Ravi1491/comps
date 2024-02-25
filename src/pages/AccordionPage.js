import React, { useState } from "react";
import Accordion from "../components/Accordion";
import Button from "../components/Button";

const AccordionPage = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.content) {
      const value = {
        id: Math.floor(Math.random() * 100),
        label: formData.title,
        content: formData.content,
      };

      setData([...data, value]);
      setFormData({ title: "", content: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
        <h1 className="text-2xl font-bold text-center my-5 underline">
          Accordion Page
        </h1>
      </div>
      <form onSubmit={handleFormSubmit} className="flex justify-center my-5">
        <label>Title:</label>
        <input
          name="title"
          value={formData.title}
          className="border-2 mx-2 p-1"
          onChange={handleInputChange}
        />
        <label>Content:</label>
        <input
          name="content"
          value={formData.content}
          className="border-2 mx-2 p-1"
          onChange={handleInputChange}
        />
        <Button primary outline type="submit">
          Submit
        </Button>
      </form>
      <div className="my-8">
        <Accordion items={data} handleDeleteData={handleDeleteData} />
      </div>
    </div>
  );
};

export default AccordionPage;
