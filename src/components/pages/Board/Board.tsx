import './Board.css';

import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../../../redux/configureStore';
import { ETodoStatus, ITodo } from '../../../redux/models/todo';
import { addTodo, cancelGetTodos, getTodos } from '../../../redux/reducers/todos';
import Error from '../../shared/Error/Error';
import Fab from '../../shared/Fab/Fab';
import Loading from '../../shared/Loading/Loading';
import TodoList from './TodoList/TodoList';

interface IProps {
  todos: {
    todos: ITodo[];
    isFetching: boolean;
    hasErrors: boolean;
  };
  getTodos: () => void;
  cancelGetTodos: () => void;
  addTodo: () => void;
}

interface IState {}

class Board extends Component<IProps, IState> {
  componentDidMount() {
    this.props.getTodos();
  }

  componentWillUnmount() {
    this.props.cancelGetTodos();
  }

  render() {
    if (this.props.todos.isFetching) return <Loading />;
    if (this.props.todos.hasErrors) return <Error />;

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
  cancelGetTodos,
  addTodo
};

const connectToRedux = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectToRedux(Board);
