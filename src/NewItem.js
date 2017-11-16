import React, { Component } from 'react';

class NewItem extends Component {
  constructor({ onAdd }) {
    super();

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick(event) {
    this.props.onAdd(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <div className="newItem">
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default NewItem;