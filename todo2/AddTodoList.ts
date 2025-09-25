import React, { useState } from "react";

const AddTodoList = ({ setItem }) => {
  const [listItem, setListItem] = useState("");
  const randomId = Math.random().toString();

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem((prev) => {
      return [...prev, { id: randomId, text: listItem }];
    });
    setListItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={listItem}
        onChange={(e) => setListItem(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddTodoList;
