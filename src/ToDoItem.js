import React, { Component } from 'react';

class ToDoItem extends Component {
  constructor({ text, isDone, onDone}) {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onDone(event.target.checked);
  }

  render() {
    const { text, isDone } = this.props;
    const isDoneClass = isDone ? 'done' : '';

    return (
      <div className="toDoItem">
        <input type="checkbox" checked={isDone} onChange={this.handleChange}></input>
        <span className={isDoneClass}>{text}</span>
      </div>
    );
  }
}

export default ToDoItem;