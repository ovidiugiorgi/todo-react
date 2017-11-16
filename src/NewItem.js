import React, { Component } from 'react';

class NewItem extends Component {
  constructor({ onAdd }) {
    super();

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  onSubmit() {
    if (this.state.value.length) {
      this.props.onAdd(this.state.value);      
    }
    this.setState({value: ''});
  }

  handleKeyPress(event) {
    // enter
    if (event.keyCode === 13) {
      event.preventDefault();

      this.onSubmit();
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick(event) {
    this.onSubmit();
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