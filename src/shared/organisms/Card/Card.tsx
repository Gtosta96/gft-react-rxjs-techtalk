import './Card.css';

import React from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../../../redux/configureStore';
import { changeColor } from '../../../redux/reducers/cardsReducer';
import Button from '../../atoms/Button/Button';
import ColorButton from '../../atoms/ColorButton/ColorButton';
import Input from '../../atoms/Input/Input';

interface IProps {
  title: string;
  description: string;

  colors: string[];
  selectedColor: string;
  changeColor: (color: string) => void;
}

const Card = (props: IProps) => {
  return (
    <div className={`card animate ${props.selectedColor}`}>
      <Input className="card-title" placeholder="Titulo" defaultValue={props.title} />

      <Input
        className="card-description"
        placeholder="Descrição"
        defaultValue={props.description}
      />

      <div className="card-footer">
        <div>
          {props.colors.map(color => (
            <ColorButton
              key={color}
              color={color}
              activeColor={props.selectedColor}
              onClick={props.changeColor}
            />
          ))}
        </div>

        <Button />
      </div>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  colors: state.cards.colors,
  selectedColor: state.cards.selectedColor
});

const mapDispatchToProps = {
  changeColor
};

const connectToRedux = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectToRedux(Card);
