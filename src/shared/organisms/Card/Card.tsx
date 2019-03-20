import './Card.css';

import React from 'react';

import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import ColorButton from '../../atoms/ColorButton/ColorButton';

const colorButton = {
  colors: [
  'Red', 'Pink', 'Purple', 'DeepPurple', 'Indigo', 'Blue', 'Cyan', 'Teal',
  'Green', 'LightGreen', 'Lime', 'Yellow', 'Amber', 'Orange', 'DeepOrange', 'Brown'
  ],
  selectedColor: 'Red',
};

const Card = () => {
  return (
    <div className="card animate Red">
      <Input
        placeholder="Titulo"
        className="card-title"
      />
      
      <Input
        placeholder="Descrição"
        className="card-description"
      />

      <div className="card-footer">
        <div>
          {colorButton.colors.map((color) => (
            <ColorButton
              key={color}
              color={color}
              activeColor={colorButton.selectedColor}
            />
          ))}
        </div>

        <Button />
      </div>
    </div>
  )
}

export default Card;