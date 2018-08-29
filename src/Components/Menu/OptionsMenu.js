import React, { Component } from 'react';
import MenuButton from '../Menu/MenuButton.js';
import './MenuStyle.css';

class OptionsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1 class="title"> OPTIONS </h1>
        <MenuButton text="VOLUME"
                    buttonTask={() => { console.log('CHANGED VOLUME') }}/>

        <MenuButton text="CONTROLS"
                    buttonTask={() => { console.log('CHANGED CONTROLS') }}/>

        <MenuButton text="BACK"
                    buttonTask={() => { this.props.changeCurrentMenu('MAIN') }}/>
      </div>
    );
  }
}

export default OptionsMenu;