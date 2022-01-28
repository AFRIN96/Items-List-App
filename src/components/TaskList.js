import React from "react";
const TaskList = ({ items, setitems }) => {
  const handleDelete = ({ id }) => {
    setitems(items.filter((item) => item.id !== id));
  };
  return (
    <div>
      {items.map((item) => (
        <li className="li-items" key={item.id}>
          <input
            className="input"
            type="text"
            value={item.title}
            onChange={(e) => e.preventDefault()}
            onClick={() => handleDelete(item)}
          />
        </li>
      ))}
    </div>
  );
};
export default TaskList;
