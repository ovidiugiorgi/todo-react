import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  constructor({ items }) {
    super();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick(event) {
    this.props.onAdd(this.state.value);
    this.setState({value: ''});
  }

  render() {
    let { items } = this.props;

    return (
      <div className="toDoList">
        {items.map((item, index) => <ToDoItem key={index} text={item} />)}
      </div>
    );
  }
}

export default ToDoList;