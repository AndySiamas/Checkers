import React, { Component } from 'react';
import BlackSquare from '../../Images/BlackSquare.png';
import WhiteSquare from '../../Images/WhiteSquare.png';
import Checker from './Checker.js';
import './GameStyle.css';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.getImage(),
      value: 'HELLO'
    };
  }

  getImage() {
    if (this.props.color === 'BLACK') {
      return BlackSquare;
    } else {
      return WhiteSquare;
    }
  }
  render() {
    return (
      <div>
        <button> <img class="Square" src={this.state.image}></img> </button>
      </div>
    )
  }
}

export default Square;