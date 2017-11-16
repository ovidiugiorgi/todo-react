import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  constructor({ items, onDone }) {
    super();

    this.onDone = this.onDone.bind(this);
  }

  onDone(index, isDone) {
    this.props.onDone(index, isDone);
  }

  render() {
    let { items } = this.props;

    return (
      <div className="toDoList">
        {items.map(
          (item, index) => 
            <ToDoItem
              key={index}
              text={item.text}
              isDone={item.isDone}
              onDone={isDone => this.onDone(index, isDone)}
            />
        )}
      </div>
    );
  }
}

export default ToDoList;