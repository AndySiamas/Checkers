import React, { Component } from 'react';
import MenuManager from './Components/Managers/MenuManager.js';
import GameManager from './Components/Managers/GameManager.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'MENU'
    };
  }

  componentDidUpdate() {
    console.log('APP MANAGER: ' + this.state.gameState);
  }

  displayGameState() {
    switch (this.state.gameState) {
      case 'MENU': return <MenuManager changeGameState={ this.changeGameState.bind(this) }/>
      case 'GAME': return <GameManager changeGameState={ this.changeGameState.bind(this) }/>
    }
  }

  changeGameState(newState) {
    if (this.state.gameState !== newState) {
      this.setState({ gameState: newState });
    }
  }

  render() {
    return (
    <div class="container">
      { this.displayGameState() }
    </div>
    );
  }
}

export default App;