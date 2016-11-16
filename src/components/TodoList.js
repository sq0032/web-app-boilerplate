import React, { Component } from 'react';
import TodoItem from './TodoItem';

let TodoList = ({ todos, onClickToRemove }) => {
  const TodoItems = todos.map( (todo, index) => {
    return (
      <TodoItem 
        key={index} 
        text={todo} 
        onClickToRemove={() => onClickToRemove(index)}
      />
     )
  });
  console.log(TodoItems)
  return (
    <div>
      TodoList
      {TodoItems}
    </div>
  );
}

export default TodoList;
