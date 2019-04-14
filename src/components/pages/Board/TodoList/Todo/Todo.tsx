import './Todo.css';

import React from 'react';

import { ETodoStatus, ITodo } from '../../../../../models/todo';
import todosService from '../../../../../services/todos';
import Button from '../../../../shared/Button/Button';
import ColorButton from '../../../../shared/ColorButton/ColorButton';
import Input from '../../../../shared/Input/Input';

interface IProps {
  todo: ITodo;
}

const Todo = (props: IProps) => {
  return (
    <div className={`card ${props.todo.color}`}>
      <Input
        className="card-title"
        placeholder="Titulo"
        defaultValue={props.todo.title}
        onChange={(e: any) => todosService.changeTodo(props.todo, { title: e.target.value })}
      />

      <Input
        className="card-description"
        placeholder="Descrição"
        defaultValue={props.todo.description}
        onChange={(e: any) => todosService.changeTodo(props.todo, { description: e.target.value })}
      />

      <div className="card-footer">
        <div>
          {todosService.colors.map(color => (
            <ColorButton
              key={color}
              color={color}
              activeColor={props.todo.color}
              onClick={() => todosService.changeTodo(props.todo, { color })}
            />
          ))}
        </div>

        {props.todo.status === ETodoStatus.TODO && (
          <Button
            className="card-button"
            onClick={() => todosService.moveTodo(props.todo, ETodoStatus.DOING)}
          >
            &#x21b7;
          </Button>
        )}

        {props.todo.status === ETodoStatus.DOING && (
          <div style={{ display: "flex" }}>
            <Button
              className="card-button"
              onClick={() => todosService.moveTodo(props.todo, ETodoStatus.TODO)}
            >
              &#x21b6;
            </Button>
            <Button
              className="card-button"
              onClick={() => todosService.moveTodo(props.todo, ETodoStatus.DONE)}
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

export default Todo;
