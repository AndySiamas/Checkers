import React, { Component } from 'react';
import BlackChecker from '../../Images/BlackChip.png';
import WhiteChecker from '../../Images/RedChip.png';

class Checker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: BlackChecker
    }
  }

  componentDidMount() {
  }

  render() {
    return <img class="Checker" src={this.state.image}></img>
  }
}

export default Checker;