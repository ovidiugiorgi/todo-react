import React, { Component } from 'react';
import './App.css';

import ToDoForm from './ToDoForm';

class App extends Component {
  render() {
    return (
      <div>
        <h1>To Do</h1>
        <ToDoForm />
      </div>
    )
  }
}

export default App;