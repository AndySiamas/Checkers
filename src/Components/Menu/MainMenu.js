import React, { Component } from 'react';
import MenuButton from '../Menu/MenuButton.js';
import './MenuStyle.css';

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1 class="title"> CHECKERS </h1>

        <MenuButton text="START"
                    buttonTask={() => { this.props.changeGameState('GAME') }}/>

        <MenuButton text="OPTIONS"
                    buttonTask={() => { this.props.changeCurrentMenu('OPTIONS') }}/>

        <MenuButton text="QUIT"
                    buttonTask={() => { console.log('QUIT GAME') }}/>
      </div>
    );
  }
}

export default MainMenu;