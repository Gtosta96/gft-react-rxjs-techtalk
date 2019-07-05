import './Board.css';

import React, { Component } from 'react';

import { ETodoStatus, ITodo } from '../../../models/todo';
import Fab from '../../shared/Fab/Fab';
import TodoList from './TodoList/TodoList';

interface IState {
  todos: ITodo[];
}

class Board extends Component<any, IState> {
  render() {
    return (
      <div className="board">
        <TodoList title={ETodoStatus.TODO} changeTodo={() => {}} moveTodo={() => {}} todos={[]} />

        <TodoList title={ETodoStatus.DOING} changeTodo={() => {}} moveTodo={() => {}} todos={[]} />

        <TodoList title={ETodoStatus.DONE} changeTodo={() => {}} moveTodo={() => {}} todos={[]} />

        <Fab onClick={() => {}} />
      </div>
    );
  }
}

export default Board;
