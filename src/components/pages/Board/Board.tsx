import './Board.css';

import React, { Component } from 'react';

import { ETodoColors, ETodoStatus, ITodo } from '../../../models/todo';
import Fab from '../../shared/Fab/Fab';
import { changeTodoHelper, moveTodoHelper } from './helpers';
import TodoList from './TodoList/TodoList';
import mockTodos from './todos.json';

interface IState {
  todos: ITodo[];
}

class Board extends Component<any, IState> {
  state = {
    todos: mockTodos as any
  };

  addTodo = () => {
    const emptyTodo = {
      id: Math.random().toString(),
      title: "",
      description: "",
      color: ETodoColors.RED,
      status: ETodoStatus.TODO
    };

    this.setState({
      todos: [...this.state.todos, emptyTodo]
    });
  };

  changeTodo = (todo: ITodo, modifiedTodo: Partial<ITodo>) => {
    this.setState({
      todos: changeTodoHelper(this.state.todos, todo, modifiedTodo)
    });
  };

  moveTodo = (todo: ITodo, status: ETodoStatus) => {
    this.setState({
      todos: moveTodoHelper(this.state.todos, todo, status)
    });
  };

  render() {
    return (
      <div className="board">
        <TodoList
          title={ETodoStatus.TODO}
          changeTodo={this.changeTodo}
          moveTodo={this.moveTodo}
          todos={this.state.todos.filter((todo: ITodo) => todo.status === ETodoStatus.TODO)}
        />

        <TodoList
          title={ETodoStatus.DOING}
          changeTodo={this.changeTodo}
          moveTodo={this.moveTodo}
          todos={this.state.todos.filter((todo: ITodo) => todo.status === ETodoStatus.DOING)}
        />

        <TodoList
          title={ETodoStatus.DONE}
          changeTodo={this.changeTodo}
          moveTodo={this.moveTodo}
          todos={this.state.todos.filter((todo: ITodo) => todo.status === ETodoStatus.DONE)}
        />

        <Fab onClick={this.addTodo} />
      </div>
    );
  }
}

export default Board;
