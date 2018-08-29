import React, { Component } from 'react';
import './MenuStyle.css';

class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <button class="menuButton" onClick={() => {this.props.buttonTask()}}> {this.props.text}  </button>
      </div>
    );
  }
}

export default MenuButton;