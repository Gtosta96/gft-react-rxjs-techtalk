import './Board.css';

import React, { Component } from 'react';

import { ETodoStatus, ITodo } from '../../../models/todo';
import todosService from '../../../services/todos';
import Fab from '../../shared/Fab/Fab';
import TodoList from './TodoList/TodoList';

interface IProps {}

interface IState {
  todos: ITodo[];
  isFetching: boolean;
  hasErrors: boolean;
}

class Board extends Component<IProps, IState> {
  state: IState = {
    todos: [],
    isFetching: false,
    hasErrors: false
  };

  componentDidMount() {
    this.setState({ isFetching: true });

    todosService.getTodos().subscribe(
      todos => {
        this.setState({ isFetching: false, todos });
      },
      error => {
        this.setState({ isFetching: false, hasErrors: true });
      }
    );
  }

  render() {
    if (this.state.isFetching) return "LOADING...";
    if (this.state.hasErrors) return "SOMETHING WENT WRONG...";

    return (
      <div className="board">
        <TodoList
          title={ETodoStatus.TODO}
          todos={this.state.todos.filter(todo => todo.status === ETodoStatus.TODO)}
        />

        <TodoList
          title={ETodoStatus.DOING}
          todos={this.state.todos.filter(todo => todo.status === ETodoStatus.DOING)}
        />

        <TodoList
          title={ETodoStatus.DONE}
          todos={this.state.todos.filter(todo => todo.status === ETodoStatus.DONE)}
        />

        <Fab onClick={todosService.addTodo} />
      </div>
    );
  }
}

export default Board;
