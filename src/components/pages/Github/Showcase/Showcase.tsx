import './Showcase.css';

import React, { Component } from 'react';

import { IGithubUser } from '../../../../redux/models/github';
import User from './User/User';

interface IProps {
  users: IGithubUser[];
}

interface IState {}
class Showcase extends Component<IProps, IState> {
  render() {
    return (
      <div className="showcase">
        {this.props.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Showcase;
