import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";
import "./style.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="droppable-1" type="PERSON">
        {(provided, snapshot) => (
          <div
            className="todos"
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
      <Droppable droppableId="droppable-1" type="PERSON">
        {(provided, snapshot) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed tasks</span>
            {completedTodos?.map((todo, index) => {
              return (
                <div key={todo.id}>
                  <SingleTodo 
                    index={index}
                    todo={todo}
                    todos={completedTodos}
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
