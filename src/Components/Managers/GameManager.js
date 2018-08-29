import React, { Component } from 'react';
import Board from '../InGame/Board.js';
import MenuButton from '../Menu/MenuButton.js';

class GameManager extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Board />
        <MenuButton text="BACK"
                    buttonTask={() => { 
                      this.props.changeGameState('MENU');
                    }}/>
      </div>
    );
  }
}

export default GameManager;