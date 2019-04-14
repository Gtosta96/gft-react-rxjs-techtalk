import './Github.css';

import React, { Component } from 'react';
import { Subscription } from 'rxjs';

import githubService from '../../../services/github';
import Err from '../../shared/Error/Error';
import Input from '../../shared/Input/Input';
import Loading from '../../shared/Loading/Loading';
import Showcase from './Showcase/Showcase';

interface IProps {}

interface IState {
  users: any[];
  isFetching: boolean;
  hasErrors: boolean;
}

class Github extends Component<IProps, IState> {
  githubServiceSubscription$!: Subscription;

  state: IState = {
    users: [],
    isFetching: false,
    hasErrors: false
  };

  componentDidMount() {
    this.githubServiceSubscription$ = githubService.getUsers().subscribe(
      users => {
        this.setState({ hasErrors: false, isFetching: false, users });
      },
      error => {
        this.setState({ isFetching: false, hasErrors: true });
      }
    );
  }

  componentWillUnmount() {
    this.githubServiceSubscription$.unsubscribe();
  }

  searchGithubUsers = (e: any) => {
    this.setState({ isFetching: true });
    githubService.searchUsers(e.target.value);
  };

  /**
   * Render fns
   */

  renderContent = () => {
    if (this.state.isFetching) return <Loading />;
    if (this.state.hasErrors) return <Err />;

    return <Showcase users={this.state.users} />;
  };

  render() {
    return (
      <div className="github">
        <div className="github-search">
          <Input type="text" placeholder="Search..." onChange={this.searchGithubUsers} />
        </div>

        {this.renderContent()}
      </div>
    );
  }
}

export default Github;
