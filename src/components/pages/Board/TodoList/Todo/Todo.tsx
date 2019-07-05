import './Todo.css';

import React from 'react';

import { ETodoColors, ETodoStatus, ITodo } from '../../../../../models/todo';
import Button from '../../../../shared/Button/Button';
import ColorButton from '../../../../shared/ColorButton/ColorButton';
import Input from '../../../../shared/Input/Input';

interface IProps {
  todo: ITodo;
  changeTodo: (todo: ITodo, changes: Partial<ITodo>) => void;
  moveTodo: (todo: ITodo, status: ETodoStatus) => void;
}

interface IState {
  colors: ETodoColors[];
}

class Todo extends React.Component<IProps, IState> {
  state = {
    colors: [
      ETodoColors.RED,
      ETodoColors.PINK,
      ETodoColors.PURPLE,
      ETodoColors.DEEPPURPLE,
      ETodoColors.INDIGO,
      ETodoColors.BLUE,
      ETodoColors.CYAN,
      ETodoColors.TEAL,
      ETodoColors.GREEN,
      ETodoColors.LIGHTGREEN,
      ETodoColors.LIME,
      ETodoColors.YELLOW,
      ETodoColors.AMBER,
      ETodoColors.ORANGE,
      ETodoColors.DEEPORANGE,
      ETodoColors.BROWN
    ]
  };

  render() {
    return (
      <div className={`card ${this.props.todo.color}`}>
        <Button className="card-delete" onClick={() => alert("TODO -> HANDS ON")}>
          &#10005;
        </Button>

        <Input
          className="card-title"
          placeholder="Titulo"
          defaultValue={this.props.todo.title}
          onChange={(e: any) => this.props.changeTodo(this.props.todo, { title: e.target.value })}
        />

        <Input
          className="card-description"
          placeholder="Descrição"
          defaultValue={this.props.todo.description}
          onChange={(e: any) =>
            this.props.changeTodo(this.props.todo, { description: e.target.value })
          }
        />

        <div className="card-footer">
          <div>
            {this.state.colors.map(color => (
              <ColorButton
                key={color}
                color={color}
                activeColor={this.props.todo.color}
                onClick={() => this.props.changeTodo(this.props.todo, { color })}
              />
            ))}
          </div>

          {this.props.todo.status === ETodoStatus.TODO && (
            <Button
              className="card-button"
              onClick={() => this.props.moveTodo(this.props.todo, ETodoStatus.DOING)}
            >
              &#x21b7;
            </Button>
          )}

          {this.props.todo.status === ETodoStatus.DOING && (
            <div style={{ display: "flex" }}>
              <Button
                className="card-button"
                onClick={() => this.props.moveTodo(this.props.todo, ETodoStatus.TODO)}
              >
                &#x21b6;
              </Button>
              <Button
                className="card-button"
                onClick={() => this.props.moveTodo(this.props.todo, ETodoStatus.DONE)}
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
  }
}

export default Todo;
