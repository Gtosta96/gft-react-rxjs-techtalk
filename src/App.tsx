import './App.css';

import React, { Component } from 'react';

import Board from './components/pages/Board/Board';
import logo from './logo.svg';

interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Board />
      </div>
    );
  }
}

export default App;
