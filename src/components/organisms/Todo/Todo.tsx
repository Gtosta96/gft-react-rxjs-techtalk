import './Todo.css';

import React from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../../../redux/configureStore';
import { ETodoColors, ETodoStatus, ITodo } from '../../../redux/models/todo';
import { changeTodo, moveTodo } from '../../../redux/reducers/todos';
import Button from '../../atoms/Button/Button';
import ColorButton from '../../atoms/ColorButton/ColorButton';
import Input from '../../atoms/Input/Input';

interface IProps {
  todo: ITodo;
  colors: ETodoColors[];
  changeTodo: (todo: ITodo, changes: Partial<ITodo>) => void;
  moveTodo: (todo: ITodo, status: ETodoStatus) => void;
}

const Todo = (props: IProps) => {
  return (
    <div className={`card ${props.todo.color}`}>
      <Input
        className="card-title"
        placeholder="Titulo"
        defaultValue={props.todo.title}
        onChange={(e: any) => props.changeTodo(props.todo, { title: e.target.value })}
      />

      <Input
        className="card-description"
        placeholder="Descrição"
        defaultValue={props.todo.description}
        onChange={(e: any) => props.changeTodo(props.todo, { description: e.target.value })}
      />

      <div className="card-footer">
        <div>
          {props.colors.map(color => (
            <ColorButton
              key={color}
              color={color}
              activeColor={props.todo.color}
              onClick={() => props.changeTodo(props.todo, { color })}
            />
          ))}
        </div>

        {props.todo.status === ETodoStatus.TODO && (
          <Button
            className="card-button"
            onClick={() => props.moveTodo(props.todo, ETodoStatus.DOING)}
          >
            &#x21b7;
          </Button>
        )}

        {props.todo.status === ETodoStatus.DOING && (
          <div style={{ display: "flex" }}>
            <Button
              className="card-button"
              onClick={() => props.moveTodo(props.todo, ETodoStatus.TODO)}
            >
              &#x21b6;
            </Button>
            <Button
              className="card-button"
              onClick={() => props.moveTodo(props.todo, ETodoStatus.DONE)}
            >
              &#x21b7;
            </Button>
          </div>
        )}

        {/* {props.todo.status === ETodoStatus.DONE && (
          <Button className="card-button">DOING</Button>
        )} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  colors: state.todos.colors
});

const mapDispatchToProps = {
  changeTodo,
  moveTodo
};

const connectToRedux = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectToRedux(Todo);
