import React, { Component } from 'react';

import { ITodo } from '../../../redux/models/todo';
import Card from '../Card/Card';

interface IProps {
  title: string;
  todos: ITodo[];
}

interface IState {}

class Todos extends Component<IProps, IState> {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.todos.map(todo => (
          <Card key={todo.id} title={todo.title} description={todo.description} />
        ))}
      </div>
    );
  }
}

export default Todos;
