import React, { Component } from 'react';
import BlackSquare from '../../Images/BlackSquare.png';
import WhiteSquare from '../../Images/WhiteSquare.png';
import Square from './Square.js';
import './GameStyle.css';

class SquareController {
  constructor(x, y, color, value) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.value = value;
      this.node = <Square color={this.color}/>
  }
}

export default SquareController;