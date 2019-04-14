import './Board.css';

import React, { Component } from 'react';
import { Subscription } from 'rxjs';

import { ETodoStatus, ITodo } from '../../../models/todo';
import todosService from '../../../services/todos';
import Err from '../../shared/Error/Error';
import Fab from '../../shared/Fab/Fab';
import Loading from '../../shared/Loading/Loading';
import TodoList from './TodoList/TodoList';

interface IProps {}

interface IState {
  todos: ITodo[];
  isFetching: boolean;
  hasErrors: boolean;
}

class Board extends Component<IProps, IState> {
  todosServiceSubscription$!: Subscription;

  state: IState = {
    todos: [],
    isFetching: false,
    hasErrors: false
  };

  componentDidMount() {
    this.setState({ isFetching: true });

    this.todosServiceSubscription$ = todosService.getTodos().subscribe(
      todos => {
        this.setState({ isFetching: false, hasErrors: false, todos });
      },
      error => {
        this.setState({ isFetching: false, hasErrors: true });
      }
    );
  }

  componentWillUnmount() {
    this.todosServiceSubscription$.unsubscribe();
  }

  render() {
    if (this.state.isFetching) return <Loading />;
    if (this.state.hasErrors) return <Err />;

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
