import React, { Component } from 'react';
import MainMenu from '../Menu/MainMenu.js';
import OptionsMenu from '../Menu/OptionsMenu.js';
import MenuButton from '../Menu/MenuButton.js';

class MenuManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: 'MAIN'
    }
  }

  componentDidUpdate() {
    console.log('MENU MANAGER: ' + this.state.currentMenu);
  }

  changeCurrentMenu(newMenu) {
    if (this.state.currentMenu !== newMenu) {
      this.setState({ currentMenu: newMenu });
    }
  }

  displayMenu() {
    switch (this.state.currentMenu) {
      case 'MAIN': return <MainMenu changeGameState={this.props.changeGameState}
                                    changeCurrentMenu={this.changeCurrentMenu.bind(this)}/>
                                    
      case 'OPTIONS': return <OptionsMenu changeGameState={this.props.changeGameState}
                                          changeCurrentMenu={this.changeCurrentMenu.bind(this)}/>
    }
  }

  render() {
    return (
      <div>
        { this.displayMenu() }
      </div>
    );
  }
}

export default MenuManager;