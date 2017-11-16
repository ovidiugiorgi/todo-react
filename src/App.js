import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import NewItem from './NewItem';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };

    this.handleDone = this.handleDone.bind(this);    
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(value) {
    const newItem = {
      text: value,
      isDone: false,
    };

    this.setState({
      items: this.state.items.concat([newItem]),
    });
  }

  handleDone(index, isDone) {
    let items = this.state.items;
    let doneItem = items[index];
    
    doneItem.isDone = isDone;

    items.splice(index, 1);

    if (isDone) {
      items.push(doneItem);
    } else {
      items.unshift(doneItem);
    }

    this.setState({
      items: items,
    });
  }

  render() {
    return (
      <div>
        <h1>To Do</h1>
        <ToDoList items={this.state.items} onDone={this.handleDone}/>
        <NewItem onAdd={this.handleAdd} />
      </div>
    )
  }
}

export default App;