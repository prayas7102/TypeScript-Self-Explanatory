import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";
import "./style.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  CompletedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  CompletedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active tasks</span>
            {todos?.map((todo, index) => {
              return (
                <div key={todo.id}>
                  <SingleTodo
                    index={index}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                  />
                </div>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            className={`todos ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed tasks</span>
            {CompletedTodos?.map((todo, index) => {
              return (
                <div key={todo.id}>
                  <SingleTodo
                    index={index}
                    todo={todo}
                    todos={CompletedTodos}
                    setTodos={setCompletedTodos}
                  />
                </div>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
