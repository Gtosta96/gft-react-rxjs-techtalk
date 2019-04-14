import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { EPaths } from '../settings/constants';
import logo from './logo.svg';
import Board from './pages/Board/Board';
import Github from './pages/Github/Github';

interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  render() {
    return (
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
    );
  }
}

export default App;
