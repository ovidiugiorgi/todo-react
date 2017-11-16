import React, { Component } from 'react';

class ToDoItem extends Component {
  constructor({text}) {
    super();

    this.setState({
      text: text
    });
  }

  render() {
    const { text } = this.props;

    return (
      <div className="toDoItem">
        <input type="checkbox"></input>
        <span>{text}</span>
      </div>
    )
  }
}

export default ToDoItem;