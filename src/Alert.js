import React, {Component} from 'react';
import './App.css';

export default class Alert extends Component{
    toggleSound = () =>{
        this.props.sound ? this.props.setSound(false) : this.props.setSound(true);
    }


  render() {
    return (
      <button onClick={this.toggleSound}
              className={this.props.sound? 'sound-on' : 'sound-off'}> 
        SOUND 
      </button>
    );
  }
}