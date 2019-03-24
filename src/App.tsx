import './App.css';

import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import logo from './logo.svg';
import configureStore from './redux/configureStore';
import Card from './shared/organisms/Card/Card';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <ReactRedux.Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <Card />
        </div>
      </ReactRedux.Provider>
    );
  }
}

export default App;
