import './User.css';

import React from 'react';

interface IProps {
  user: any;
}

const User = (props: IProps) => {
  return (
    <div className="github-card">
      <a className="link-container" href={props.user.html_url} target="_blank'">
        <div>
          <h1>{props.user.login}</h1>
        </div>
        <img src={props.user.avatar_url} alt="" />
      </a>
    </div>
  );
};

export default User;
