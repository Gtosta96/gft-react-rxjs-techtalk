import './TodoList.css';

import React, { Component } from 'react';

import { ETodoStatus, ITodo } from '../../../../models/todo';
import Todo from './Todo/Todo';

interface IProps {
  title: string;
  todos: ITodo[];
  changeTodo: (todo: ITodo, changes: Partial<ITodo>) => void;
  moveTodo: (todo: ITodo, status: ETodoStatus) => void;
}

class TodoList extends Component<IProps> {
  render() {
    return (
      <div className="todo-list">
        <h1 className="title">{this.props.title}</h1>

        {this.props.todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            changeTodo={this.props.changeTodo}
            moveTodo={this.props.moveTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
