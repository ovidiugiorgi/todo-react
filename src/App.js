import React, { Component } from 'react';
import './App.css';
import ToDoItem from './ToDoItem';

class App extends Component {
  render() {
    return (
      <div>
        <ToDoItem text="test" />
      </div>
    )
  }
}

export default App;