import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import { getTodos } from '../../../redux/reducers/todosReducer';
import Card from '../Card/Card';

interface IProps {
  todosReducer: {
    todos: {
      id: string;
      title: string;
      description: string;
    }[];
    isFetching: boolean;
    hasErrors: boolean;
  };
  getTodos: () => void;
}

interface IState {
  todos: {
    id: string;
    title: string;
    description: string;
  }[];
}

class Todos extends Component<IProps, IState> {
  state: IState = {
    todos: []
  };

  componentDidMount() {
    // fetch("http://my-json-server.typicode.com/HerowayBrasil/04-react/todos", {
    //   method: "GET"
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     this.setState({ todos: json });
    //   })
    //   .catch(error => console.log("error", error));

    this.props.getTodos();
  }

  render() {
    if (this.props.todosReducer.isFetching) return "LOADING...";
    if (this.props.todosReducer.hasErrors) return "SOMETHING WENT WRONG...";

    return (
      <div>
        {this.props.todosReducer.todos.map(todo => (
          <Card
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  todosReducer: state.todos // isFetching, hasErrors, todos
});

const mapDispatchToProps = {
  getTodos
};

const connectToRedux = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectToRedux(Todos);
