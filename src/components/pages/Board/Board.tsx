import './Board.css';

import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../../../redux/configureStore';
import { ETodoStatus, ITodo } from '../../../redux/models/todo';
import { addTodo, getTodos } from '../../../redux/reducers/todos';
import Fab from '../../shared/Fab/Fab';
import TodoList from './TodoList/TodoList';

interface IProps {
  todos: {
    todos: ITodo[];
    isFetching: boolean;
    hasErrors: boolean;
  };
  getTodos: () => void;
  addTodo: () => void;
}

interface IState {}

class Board extends Component<IProps, IState> {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    if (this.props.todos.isFetching) return "LOADING...";
    if (this.props.todos.hasErrors) return "SOMETHING WENT WRONG...";

    return (
      <div className="board">
        <TodoList
          title={ETodoStatus.TODO}
          todos={this.props.todos.todos.filter(todo => todo.status === ETodoStatus.TODO)}
        />

        <TodoList
          title={ETodoStatus.DOING}
          todos={this.props.todos.todos.filter(todo => todo.status === ETodoStatus.DOING)}
        />

        <TodoList
          title={ETodoStatus.DONE}
          todos={this.props.todos.todos.filter(todo => todo.status === ETodoStatus.DONE)}
        />

        <Fab onClick={this.props.addTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  todos: state.todos // isFetching, hasErrors, todos
});

const mapDispatchToProps = {
  getTodos,
  addTodo
};

const connectToRedux = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectToRedux(Board);
