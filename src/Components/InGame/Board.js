import React, { Component } from 'react';
import Square from './Square.js';
import BoardVector from '../../Images/Board.png';
import './GameStyle.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import SquareController from './SquareController.js';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: []
    }
  }

  componentDidMount() {
    this.createBoard(10);
  }

  createBoard(size) {
    let newGrid = [];
    let currentColor = 'BLACK'
    for (let rows = 0; rows < size; rows++) {
      let rowOfSquares = [];
      for (let cols = 0; cols < size; cols++) {
        let square = new SquareController(cols, rows, currentColor, this);
        rowOfSquares.push(square);
        currentColor = (currentColor === 'BLACK') ? 'WHITE' : 'BLACK';
      }
      newGrid.push(rowOfSquares);
      currentColor = (currentColor === 'BLACK') ? 'WHITE' : 'BLACK';
    }
    this.setState({grid: newGrid});
    return newGrid;
  }

  updateSquare(x, y, updatedSquare) {
    let newGrid = this.state.grid;
    newGrid[y][x] = updatedSquare;
    this.setState({grid: newGrid});
  }

  render() {
    return (
        <div class="board">
          {this.state.grid.map((row) => 
            row.map((square) => 
              (<div> 
                <div class="box a"> {square.node} <span id="overlay"> <p></p> </span>  </div> 
              </div>))
            )}
        </div>
    );
  }
}

export default Board;