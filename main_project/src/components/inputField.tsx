import React from "react";
import "./input.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent)=> void;
}

// alternate function declaration with arrow function:
// const inputField: React.FC <Props> = ({ todo, setTodo }) => {}

function inputField({ todo, setTodo, handleAdd }: Props) {
  return (
    <div>
      <form className="input" onSubmit={handleAdd}>
        <input
          type="input"
          placeholder="Enter a task"
          className="input__box"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
}

export default inputField;
