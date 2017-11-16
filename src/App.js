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

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(value) {
    this.setState({
      items: this.state.items.concat([value]),
    });
  }

  render() {
    return (
      <div>
        <ToDoList items={this.state.items} />
        <NewItem onAdd={this.handleAdd} />
      </div>
    )
  }
}

export default App;