import './TodoList.css';

import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../../../redux/configureStore';
import { ETodoStatus, ITodo } from '../../../redux/models/todo';
import { addTodo, getTodos } from '../../../redux/reducers/todos/todosReducer';
import Fab from '../../atoms/Fab/Fab';
import Todos from '../Todos/Todos';

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

class TodoList extends Component<IProps, IState> {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    if (this.props.todos.isFetching) return "LOADING...";
    if (this.props.todos.hasErrors) return "SOMETHING WENT WRONG...";

    return (
      <div className="todo-list">
        <Todos
          title={ETodoStatus.TODO}
          todos={this.props.todos.todos.filter(todo => todo.status === ETodoStatus.TODO)}
        />

        <Todos
          title={ETodoStatus.DOING}
          todos={this.props.todos.todos.filter(todo => todo.status === ETodoStatus.DOING)}
        />

        <Todos
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
export default connectToRedux(TodoList);
