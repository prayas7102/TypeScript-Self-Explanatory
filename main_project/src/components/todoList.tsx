import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./style.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos?.map((todo) => {
        return <div key={todo.id}><SingleTodo todo={todo} todos={todos} setTodos={setTodos} /></div>;
      })}
    </div>
  );
};

export default TodoList;
