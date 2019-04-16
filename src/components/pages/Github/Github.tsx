import './Github.css';

import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../../../redux/configureStore';
import { searchGithubUsers } from '../../../redux/reducers/github';
import Err from '../../shared/Error/Error';
import Input from '../../shared/Input/Input';
import Loading from '../../shared/Loading/Loading';
import Showcase from './Showcase/Showcase';

interface IProps {
  github: {
    users: any[];
    isFetching: boolean;
    hasErrors: boolean;
  };
  searchGithubUsers: (query: string) => void;
}

interface IState {}

class Github extends Component<IProps, IState> {
  searchGithubUsers = (e: any) => {
    this.props.searchGithubUsers(e.target.value);
  };

  /**
   * Render fns
   */

  renderContent = () => {
    if (this.props.github.isFetching) return <Loading />;
    if (this.props.github.hasErrors) return <Err />;

    return <Showcase users={this.props.github.users} />;
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

const mapStateToProps = (state: IAppState) => ({
  github: state.github
});

const mapDispatchToProps = {
  searchGithubUsers
};

const connectToRedux = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectToRedux(Github);
