import './Button.css';

import React from 'react';

interface IProps { }

const Button = (props: IProps) => (
	<button
    type="button"
    className="btn btn-link animate button-component"
  >
    Salvar
  </button>
);

export default Button;
