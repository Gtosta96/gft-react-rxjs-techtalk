import './App.css';

import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Board from './components/pages/Board/Board';
import Github from './components/pages/Github/Github';
import logo from './logo.svg';
import configureStore from './redux/configureStore';
import { EPaths } from './settings/constants';

const store = configureStore();

interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  render() {
    return (
      <ReactRedux.Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <nav className="App-menu">
                <ul>
                  <li>
                    <Link to={EPaths.GITHUB}>GitHub Users</Link>
                  </li>
                  <li>
                    <Link to={EPaths.BOARD}>Todo List</Link>
                  </li>
                </ul>
              </nav>
              <img src={logo} className="App-logo" alt="logo" />
            </header>

            <Switch>
              <Route exact path={EPaths.ROOT} component={Github} />

              <Route path={EPaths.GITHUB} component={Github} />
              <Route path={EPaths.BOARD} component={Board} />
            </Switch>
          </div>
        </Router>
      </ReactRedux.Provider>
    );
  }
}

export default App;
