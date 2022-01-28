import "./styles.css";
import React, { useState } from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
export default function App() {
  const [input, setInput] = useState();
  const [items, setitems] = useState([]);

  return (
    <div className="App">
      <div>
        <Home />
      </div>
      <div>
        <Form
          input={input}
          setInput={setInput}
          items={items}
          setitems={setitems}
        />
      </div>
      <div>
        <TaskList items={items} setitems={setitems} />
      </div>
    </div>
  );
}
