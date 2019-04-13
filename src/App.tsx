import './App.css';

import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import Board from './components/pages/Board/Board';
import logo from './logo.svg';
import configureStore from './redux/configureStore';

const store = configureStore();

interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  render() {
    return (
      <ReactRedux.Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <Board />
        </div>
      </ReactRedux.Provider>
    );
  }
}

export default App;
