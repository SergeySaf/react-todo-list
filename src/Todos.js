import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
    ) : (
    <p>You don't have any todos, Lol!</p>
  )
  return (
    <div className="todos collection">
      <h3>{todoList}</h3>
    </div>
  )
}

export default Todos;
