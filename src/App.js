import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';


class App extends Component {
  state = {
    todos: [
      {id: 1, content: "by some milk"},
      {id: 2, content: "play football with friends"}
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return id !== todo.id
    })
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo  addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
