import './Card.css';

import React from 'react';
import * as ReactRedux from 'react-redux';

import { changeColor } from '../../../redux/reducers/rootReducer';
import Button from '../../atoms/Button/Button';
import ColorButton from '../../atoms/ColorButton/ColorButton';
import Input from '../../atoms/Input/Input';

interface IProps {
  colors: string[];
  selectedColor: string;
  changeColor: (color: string) => void;
}

const Card = (props: IProps) => {
  return (
    <div className={`card animate ${props.selectedColor}`}>
      <Input placeholder="Titulo" className="card-title" />

      <Input placeholder="Descrição" className="card-description" />

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

const mapStateToProps = (state: any) => ({
  colors: state.colors,
  selectedColor: state.selectedColor
});

const mapDispatchToProps = {
  changeColor
};

const connectToRedux = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectToRedux(Card);
