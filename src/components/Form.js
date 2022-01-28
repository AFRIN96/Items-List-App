import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Form({ input, setInput, items, setitems }) {
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setitems([...items, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Items"
        value={input}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
