import React, {Component} from 'react';
import './App.css';

export default class TimeOnController extends Component{
    triggerIncrement = ()=>{
        this.props.incrementOutTime()
    }
    triggerDecrement = ()=>{
        this.props.decrementOutTime()
    }

  render() {
    return (
      <div className="controller">
        <p>TIME OUT : </p>
        <button onClick={this.triggerDecrement}> - </button>
        <span> {this.props.outTime} </span>
        <button onClick={this.triggerIncrement}> + </button>
      </div>
    );
  }
}