import React, { Component } from 'react';
import BlackSquare from '../../Images/BlackSquare.png';
import WhiteSquare from '../../Images/WhiteSquare.png';
import './GameStyle.css';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.getImage()
    };
  }

  getImage() {
    if (this.props.color === 'BLACK') {
      return BlackSquare;
    } else {
      return WhiteSquare;
    }
  }

  componentDidMount() {
  }

  render() {
    return <img class="Square" src={this.state.image}></img>
  }
}

export default Square;