import './TodoList.css';

import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../../../redux/configureStore';
import { ETodoStatus, ITodo } from '../../../redux/models/todo';
import { getTodos } from '../../../redux/reducers/todos/todosReducer';
import Todos from '../Todos/Todos';

interface IProps {
  todos: {
    todos: ITodo[];
    isFetching: boolean;
    hasErrors: boolean;
  };
  getTodos: () => void;
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
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  todos: state.todos // isFetching, hasErrors, todos
});

const mapDispatchToProps = {
  getTodos
};

const connectToRedux = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectToRedux(TodoList);
