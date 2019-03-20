import React from 'react';

import './ColorButton.css';

interface IProps {
  color: string,
  activeColor: string,
}

const ColorButton = ({ color, activeColor }: IProps) => (
	<button
		type="button"
		className={ `btn color-button-component animate ${color} ${activeColor === color ? 'activeColor' : ''}` }
	/>
);

export default ColorButton;
