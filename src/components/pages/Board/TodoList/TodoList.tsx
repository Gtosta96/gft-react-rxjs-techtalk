import './TodoList.css';

import React, { Component } from 'react';

import { ITodo } from '../../../../models/todo';
import Todo from './Todo/Todo';

interface IProps {
  title: string;
  todos: ITodo[];
}

interface IState {}

class TodoList extends Component<IProps, IState> {
  render() {
    return (
      <div className="todo-list">
        <h1 className="title">{this.props.title}</h1>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

export default TodoList;
