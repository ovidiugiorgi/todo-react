import React, { Component } from 'react';

class ToDoItem extends Component {
  constructor({ text }) {
    super();

    this.state = {
      isDone: false,
      text: text,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({isDone: event.target.checked});
  }

  render() {
    const { text } = this.props;
    const isDoneClass = this.state.isDone ? 'done' : '';

    return (
      <div className="toDoItem">
        <input type="checkbox" value={this.state.isDone} onChange={this.handleChange}></input>
        <span className={isDoneClass}>{text}</span>
      </div>
    )
  }
}

export default ToDoItem;