import React, { Component } from 'react';
import Board from '../InGame/Board.js';
import MenuButton from '../Menu/MenuButton.js';
import '../InGame/GameStyle.css';

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
        <div className="gameManager">
          <Board />
        </div>
        <div>
          <MenuButton text="BACK"
                            buttonTask={() => { 
                              this.props.changeGameState('MENU');
                            }}/>
        </div>
      </div>
    );
  }
}

export default GameManager;