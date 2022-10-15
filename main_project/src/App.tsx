import React, { useState } from "react";
import InputField from "./components/inputField";
import { Todo } from "./model";
import "./App.css";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <div className="heading">Taskify</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
