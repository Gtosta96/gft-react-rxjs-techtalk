import React, { Component } from 'react';

interface IProps {
  className?: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
}

interface IState {
  value: string | undefined;
}

class Input extends Component<IProps, IState> {
  static defaultProps = {
    type: "text",
    placeholder: "Digite aqui...",
    defaultValue: ""
  };

  state = {
    value: this.props.defaultValue
  };

  onChange = (e: any) => this.setState({ value: e.target.value });

  render() {
    return (
      <input
        className={this.props.className}
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.onChange}
        defaultValue={this.state.value}
      />
    );
  }
}

export default Input;
