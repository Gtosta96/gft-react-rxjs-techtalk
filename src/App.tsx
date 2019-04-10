import './App.css';

import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import logo from './logo.svg';
import configureStore from './redux/configureStore';
import Todo from './shared/organisms/Todo/Todo';

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

          <Todo />
        </div>
      </ReactRedux.Provider>
    );
  }
}

export default App;
