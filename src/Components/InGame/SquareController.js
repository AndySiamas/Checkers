import React, { Component } from 'react';
import BlackSquare from '../../Images/BlackSquare.png';
import WhiteSquare from '../../Images/WhiteSquare.png';
import Square from './Square.js';
import './GameStyle.css';

class SquareController {
  constructor(x, y, color, board) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.board = board;
      this.containersChecker = false;
      this.createNode();
      console.log(this.node);
  }

  toggleChecker() {
      this.containersChecker = !this.containersChecker;
      //this.createNode();
      console.log('clicked');
      //this.board.updateSquare(this.x, this.y, this);
  }

  createNode() {
    this.node = <Square color={this.color}
                        containsChecker={this.containersChecker}
                        toggleChecker={this.toggleChecker.bind(this)}/>
  }
}

export default SquareController;