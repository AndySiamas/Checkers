import React, { Component } from 'react';
import BoardVector from '../../Images/Board.png';
import './GameStyle.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log(BoardVector);
  }

  render() {
    return <img class="boardImg" src={BoardVector}></img>
  }
}

export default Board;