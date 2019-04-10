import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../../../redux/configureStore';
import { ITodo } from '../../../redux/models/todo';
import { getTodos } from '../../../redux/reducers/todosReducer';
import Card from '../Card/Card';

interface IProps {
  todos: {
    todos: ITodo[];
    isFetching: boolean;
    hasErrors: boolean;
  };
  getTodos: () => void;
}

interface IState {}

class Todos extends Component<IProps, IState> {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    if (this.props.todos.isFetching) return "LOADING...";
    if (this.props.todos.hasErrors) return "SOMETHING WENT WRONG...";

    return (
      <div>
        {this.props.todos.todos.map(todo => (
          <Card key={todo.id} title={todo.title} description={todo.description} />
        ))}
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
export default connectToRedux(Todos);
